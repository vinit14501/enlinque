type CalloutStyle = "info" | "tip" | "key-takeaway" | "warning";

interface CalloutProps {
  style: CalloutStyle;
  content: string;
}

const CONFIG: Record<
  CalloutStyle,
  { border: string; bg: string; icon: string; label: string }
> = {
  info: {
    // Matches the existing prose-blockquote colour — feels native to the site
    border: "border-[#0b60a0]",
    bg: "bg-blue-50",
    icon: "ℹ️",
    label: "",
  },
  tip: {
    border: "border-emerald-500",
    bg: "bg-emerald-50",
    icon: "💡",
    label: "Tip",
  },
  "key-takeaway": {
    border: "border-[#000048]",
    bg: "bg-indigo-50",
    icon: "🔑",
    label: "Key Takeaway",
  },
  warning: {
    border: "border-amber-500",
    bg: "bg-amber-50",
    icon: "⚠️",
    label: "Warning",
  },
};

export default function CalloutBlock({ style, content }: CalloutProps) {
  const cfg = CONFIG[style] ?? CONFIG.info;

  return (
    // not-prose resets Tailwind Typography so we get our own styles, not the
    // generic prose-blockquote ones (which would add italic, extra padding, etc.)
    <div
      className={`not-prose border-l-4 ${cfg.border} ${cfg.bg} px-5 py-4 rounded-r-lg my-6`}
    >
      {cfg.label && (
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1 m-0">
          {cfg.icon}&nbsp;{cfg.label}
        </p>
      )}
      <p className="text-gray-700 leading-relaxed m-0">
        {!cfg.label && <span className="mr-1">{cfg.icon}</span>}
        {content}
      </p>
    </div>
  );
}
