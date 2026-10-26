// GitHub Pages serves static files only, so each client-side route needs its own
// index.html to load directly (e.g. a /robotics link printed on the CV).
// 404.html catches any other path and lets the app render its Not Found page.
import { copyFileSync, mkdirSync } from "node:fs";

// Keep in step with sitePages (src/pages/ResumePages.tsx) and galleries (src/data/resume.ts).
const routes = ["research", "experience", "leadership", "skills", "robotics", "maps", "saakshar-nepal"];

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync("dist/index.html", `dist/${route}/index.html`);
}
copyFileSync("dist/index.html", "dist/404.html");
