import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TerminalLogin } from "../components/TerminalLogin";
import { ArchivePage } from "../components/ArchivePage";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "LUMEN17 ARCHIVE" },
      { name: "description", content: "signal locked" },
      { name: "fragment04", content: "aHR0cHM6Ly90Lm1lLytRV3gxR3luRzF3bG1Oems2" },
      { property: "og:title", content: "LUMEN17 ARCHIVE" },
      { property: "og:description", content: "signal locked" },
    ],
  }),
  component: Index,
});

function Index() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="scanlines vhs-noise terminal-flicker min-h-svh bg-terminal-bg text-terminal font-mono selection:bg-terminal/20 selection:text-terminal-glow">
      {unlocked ? <ArchivePage /> : <TerminalLogin onUnlock={() => setUnlocked(true)} />}
    </div>
  );
}
