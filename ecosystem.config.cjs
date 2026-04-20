/**
 * PM2 ecosystem config — environment-aware.
 * Reads APP_ENV from .env.local to self-configure.
 *
 * Usage:
 *   pm2 start ecosystem.config.cjs
 *
 * .env.local must contain: APP_ENV=qa | APP_ENV=production
 */

const fs = require("fs");
const path = require("path");

const ENV_FILE = path.join(__dirname, ".env.local");

function parseEnvFile(filePath) {
  try {
    const vars = {};
    for (const line of fs.readFileSync(filePath, "utf-8").split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      vars[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
    }
    return vars;
  } catch {
    return {};
  }
}

const localEnv = parseEnvFile(ENV_FILE);
const APP_ENV = localEnv.APP_ENV || process.env.APP_ENV || "production";

const environments = {
  qa:         { name: "enlinque-qa", port: "3001" },
  production: { name: "enlinque",    port: "3000" },
};

const config = environments[APP_ENV] || environments.production;

console.log(`[ecosystem] APP_ENV=${APP_ENV} → pm2 app "${config.name}" on port ${config.port}`);

module.exports = {
  apps: [
    {
      name: config.name,
      script: ".next/standalone/server.js",

      // Node.js v20.6+ built-in: loads .env.local into process.env
      // before the script runs, without any dotenv dependency.
      node_args: `--env-file=${ENV_FILE}`,

      cwd: __dirname,

      env: {
        NODE_ENV: "production",
        PORT: config.port,
        HOSTNAME: "127.0.0.1",
      },

      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "512M",
      restart_delay: 3000,
      max_restarts: 10,
      watch: false,
    },
  ],
};
