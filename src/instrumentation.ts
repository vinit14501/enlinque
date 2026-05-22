// ── DNS-over-HTTPS SRV resolver ──────────────────────────────────────────────
// Node.js v24.13.0–v24.14.x ships c-ares v1.34.4 which has a regression on
// Windows: ALL DNS SRV queries fail immediately with ECONNREFUSED — even after
// calling dns.setServers(). The permanent fix is to upgrade to Node.js ≥ v24.15.0
// (nodejs/node PR #61453 which reverts c-ares to v1.34.3).
//
// Workaround: resolve MongoDB Atlas SRV + TXT records via DNS-over-HTTPS,
// addressing Cloudflare/Google by IP (so c-ares is never involved), then rewrite
// MONGO_URI to a direct mongodb:// connection string before Payload's
// mongooseAdapter or db.ts connectDB() attempts any connection.
//
// This function is called only when a live SRV probe returns ECONNREFUSED.
async function resolveMongoSrvViaDoH(srvUri: string): Promise<string> {
  const url = new URL(srvUri);
  const srvHost = `_mongodb._tcp.${url.hostname}`;

  // Cloudflare (1.1.1.1) then Google (8.8.8.8) — addressed by IP, zero c-ares
  const doHEndpoints = [
    "https://1.1.1.1/dns-query",
    "https://8.8.8.8/dns-query",
  ];

  // 1. Resolve SRV records
  let srvHosts: string[] = [];
  for (const ep of doHEndpoints) {
    try {
      const res = await fetch(
        `${ep}?name=${encodeURIComponent(srvHost)}&type=SRV`,
        {
          headers: { accept: "application/dns-json" },
          signal: AbortSignal.timeout(8000),
        },
      );
      if (!res.ok) continue;
      const data = (await res.json()) as {
        Answer?: { type: number; data: string }[];
      };
      const answers = (data.Answer ?? []).filter((a) => a.type === 33);
      if (!answers.length) continue;
      // SRV data format: "priority weight port target."
      srvHosts = answers.map((a) => {
        const parts = a.data.trim().split(" ");
        const target = parts[3].replace(/\.$/, ""); // strip trailing dot
        return `${target}:${parts[2]}`;
      });
      break;
    } catch {
      // try next endpoint
    }
  }
  if (!srvHosts.length) throw new Error("DoH SRV: no records returned");

  // 2. Resolve TXT records — Atlas stores authSource + replicaSet here
  let txtParams: Record<string, string> = {};
  for (const ep of doHEndpoints) {
    try {
      const res = await fetch(
        `${ep}?name=${encodeURIComponent(url.hostname)}&type=TXT`,
        {
          headers: { accept: "application/dns-json" },
          signal: AbortSignal.timeout(5000),
        },
      );
      if (!res.ok) continue;
      const data = (await res.json()) as {
        Answer?: { type: number; data: string }[];
      };
      for (const rec of (data.Answer ?? []).filter((a) => a.type === 16)) {
        // Strip surrounding quotes from the TXT string, then parse key=value pairs
        const text = rec.data.replace(/^"+|"+$/g, "");
        for (const pair of text.split("&")) {
          const eq = pair.indexOf("=");
          if (eq > 0) txtParams[pair.slice(0, eq)] = pair.slice(eq + 1);
        }
      }
      break;
    } catch {
      // TXT records are advisory; continue without them
    }
  }

  // 3. Build direct mongodb:// connection string
  //    Priority: defaults → TXT record → original URI query params → tls=true
  const params = new URLSearchParams({
    authSource: "admin",
    ...txtParams,
    ...Object.fromEntries(url.searchParams),
    tls: "true",
  });

  const auth = url.username ? `${url.username}:${url.password}@` : "";
  return `mongodb://${auth}${srvHosts.join(",")}${url.pathname}?${params.toString()}`;
}

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // ── MongoDB SRV connection fix ─────────────────────────────────────────
    // Probe the SRV lookup. If c-ares returns ECONNREFUSED (Node.js v24.13.x
    // regression), fall back to DoH resolution and rewrite MONGO_URI to a
    // direct mongodb:// string before Payload or Mongoose ever connect.
    if (process.env.MONGO_URI?.startsWith("mongodb+srv://")) {
      const { promises: dnsPromises } = await import("dns");
      const srvHost = `_mongodb._tcp.${new URL(process.env.MONGO_URI).hostname}`;

      const srvFailed = await dnsPromises
        .resolveSrv(srvHost)
        .then(() => false)
        .catch((e: NodeJS.ErrnoException) => e.code === "ECONNREFUSED");

      if (srvFailed) {
        try {
          process.env.MONGO_URI = await resolveMongoSrvViaDoH(
            process.env.MONGO_URI,
          );
          console.info(
            "[Enlinque] c-ares SRV regression detected (Node.js %s). " +
              "Resolved mongodb+srv:// via DNS-over-HTTPS → direct connection string. " +
              "Upgrade to Node.js ≥ v24.15.0 for a permanent fix.",
            process.version,
          );
        } catch (err) {
          console.error(
            "[Enlinque] DoH SRV resolution failed — MongoDB connections will be unavailable. " +
              "Upgrade to Node.js ≥ v24.15.0 to fix this permanently.",
            err,
          );
        }
      }
    }
  }

  // ── Environment variable validation ───────────────────────────────────────
  const required = [
    "MONGO_URI",
    "EMAIL_USER",
    "EMAIL_PASS",
    "RECIPIENT_EMAIL",
    // Required by Payload CMS — generate with:
    // node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
    "PAYLOAD_SECRET",
  ];
  const missing = required.filter((k) => !process.env[k]);

  if (missing.length > 0) {
    // Warn rather than crash — static pages (Terms, Privacy, About, etc.)
    // must remain accessible regardless of env configuration.
    // Server actions validate these variables at call time and fail gracefully.
    // NOTE: Missing PAYLOAD_SECRET disables the Payload CMS admin panel.
    console.warn(
      `[Enlinque] Missing environment variables: ${missing.join(", ")}. ` +
        "Contact form, email features, and Payload CMS admin will be unavailable until these are set.",
    );
  }
}
