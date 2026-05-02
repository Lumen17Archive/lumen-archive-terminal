import { useEffect, useState } from "react";

const LORE_BLOCKS = [
  "Some signals are not sent to be heard by everyone.",
  "",
  "Some are left behind for the one person who stops scrolling.",
  "",
  "",
  "Lumen17 was never a name.",
  "It was the last trace of someone who became quiet enough to be mistaken for nothing.",
  "",
  "",
  "Sixteen attempts disappeared.",
  "One remained.",
  "",
  "",
  "People saw the edits.",
  "They saw the jokes.",
  "They saw the profile.",
  "They saw the noise.",
  "",
  "But they never saw the person inside it.",
  "",
  "",
  "So the signal was split into places where only the patient would look.",
  "A frame.",
  "A silence.",
  "A page.",
  "A room.",
  "",
  "",
  "If you are reading this, you did not arrive here by accident.",
  "You followed what others skipped.",
  "",
  "",
  "The archive does not open for everyone.",
  "It opens for the one who remembers the name of the signal.",
];

export function ArchivePage() {
  const [visible, setVisible] = useState(false);
  const [showTail, setShowTail] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const lastLineDelayMs = (LORE_BLOCKS.length - 1) * 120 + 300 + 400;
    const t = setTimeout(() => setShowTail(true), lastLineDelayMs + 3000);
    return () => clearTimeout(t);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="min-h-svh px-6 py-16 sm:px-12 md:px-24 lg:px-40 relative">
      <div className="max-w-xl mx-auto flex flex-col gap-0">
        {LORE_BLOCKS.map((line, i) => (
          <p
            key={i}
            className="archive-line text-[13px] sm:text-sm leading-relaxed tracking-wide text-terminal-dim"
            style={{
              animationDelay: `${i * 0.12 + 0.3}s`,
              minHeight: line === "" ? "1.2em" : undefined,
            }}
          >
            {line}
          </p>
        ))}

        {showTail && (
          <p
            className="archive-line text-[13px] sm:text-sm leading-relaxed tracking-wide text-terminal-dim mt-6"
            style={{ animationDelay: "0s" }}
          >
            A page keeps more than it shows.
          </p>
        )}
      </div>

      {/* Hidden fragment */}
      <div className="fixed bottom-3 right-4">
        <span
          className="text-[9px] tracking-wider"
          style={{ color: "oklch(0.25 0.06 145 / 18%)" }}
        >
          gur fvgr erzrzoref va vgf urnq
        </span>
      </div>
    </div>
  );
}
