import type { AppVersions } from "./vite-env";
import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";

function applyVersionAttributes(el: HTMLElement, versions: AppVersions) {
  el.setAttribute("node-version", versions.node);
  el.setAttribute("browser-version", versions.browser);
  el.setAttribute("electron-version", versions.electron);
}

window.addEventListener("DOMContentLoaded", () => {
  const mountEl = document.getElementById("app");

  if (!mountEl) {
    console.error("Mount Element is missing.");
    return;
  }

  applyVersionAttributes(mountEl, window.versions);

  createApp(App, { "os-user": window.user.username }).mount(mountEl);
});
