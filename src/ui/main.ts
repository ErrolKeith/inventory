import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const mountEl = document.getElementById("app");

  if (!mountEl) return;

  mountEl.setAttribute("node-version", window.api.versions.node);
  mountEl.setAttribute("browser-version", window.api.versions.browser);
  mountEl.setAttribute("electron-version", window.api.versions.electron);

  createApp(App, { user: JSON.stringify(window.api.user) }).mount(mountEl);
});
