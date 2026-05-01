import { useState, useRef } from "react";

interface TerminalLoginProps {
  onUnlock: () => void;
}

export function TerminalLogin({ onUnlock }: TerminalLoginProps) {
  const [password, setPassword] = useState("");
  const [rejected, setRejected] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim().toLowerCase() === "quietpart") {
      onUnlock();
    } else {
      setRejected(true);
      setPassword("");
      setTimeout(() => setRejected(false), 2500);
    }
  };

  return (
    <div className="flex min-h-svh items-center justify-center px-4">
      <div className="flex flex-col items-center gap-8 terminal-flicker">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-lg tracking-[0.35em] text-terminal-glow terminal-text-glow font-light uppercase">
            LUMEN17 ARCHIVE
          </h1>
          <p className="text-xs tracking-[0.2em] text-terminal-dim mt-2">
            signal locked
          </p>
        </div>

        <p className="text-[11px] tracking-wider text-terminal-dim text-center max-w-[280px] leading-relaxed">
          enter what the silence said
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-48 bg-transparent border-b border-terminal-dim/40 text-center text-sm text-terminal tracking-widest py-2 outline-none focus:border-terminal/60 placeholder:text-terminal-dim/30 transition-colors"
            placeholder="..."
            autoFocus
            autoComplete="off"
            spellCheck={false}
          />
          <button
            type="submit"
            className="text-[10px] tracking-[0.3em] text-terminal-dim/60 hover:text-terminal/80 transition-colors uppercase px-4 py-1 border border-terminal-dim/20 hover:border-terminal-dim/40"
          >
            enter
          </button>
        </form>

        {rejected && (
          <p className="text-[11px] tracking-[0.2em] text-destructive/70 archive-fade-in">
            signal rejected
          </p>
        )}

        <span className="text-terminal-dim/30 cursor-blink text-xs mt-4">▌</span>
      </div>
    </div>
  );
}
