// Standalone SPA entry used by the static (Vercel) build.
// Mounts the same components as the TanStack route at "/" without SSR or routing.
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { TerminalLogin } from "./components/Ter