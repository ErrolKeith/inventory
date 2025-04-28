import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const mountEl = document.getElementById("app");
  if (!mountEl) {
    throw Error("Mount element missing");
  }
  createApp(App).mount(mountEl);
});
