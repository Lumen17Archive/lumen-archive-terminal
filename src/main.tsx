// Standalone SPA entry used by the static (Vercel) build.
// Mounts the same components as the TanStack route at "/" without SSR or routing.
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { TerminalLogin } from "./components/TerminalLogin";
import { ArchivePage } from "./components/ArchivePage";
import "./styles.css";

function App() {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <div className="scanlines vhs-noise terminal-flicker min-h-svh bg-terminal-bg text-terminal font-mono selection:bg-terminal/20 selection:text-terminal-glow">
      {unlocked ? <ArchivePage /> : <TerminalLogin onUnlock={() => setUnlocked(true)} />}
    </div>
  );
}

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
