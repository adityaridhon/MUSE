import "./assets/main.css";

import { createApp } from "vue";
import Vue3Marquee from "vue3-marquee";
import App from "./App.vue";
import router from "./router";

createApp(App).use(Vue3Marquee).use(router).mount("#app");
