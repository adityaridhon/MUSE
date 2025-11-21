import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import GalleryPage from "@/pages/GalleryPage.vue";
import ServicePage from "@/pages/ServicePage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import ServiceDetail from "@/pages/ServiceDetail.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/tentang", name: "tentang", component: AboutPage },
  { path: "/galeri", name: "galeri", component: GalleryPage },
  { path: "/layanan", name: "layanan", component: ServicePage },
  { path: "/layanan/:slug", name: "layanan-detail", component: ServiceDetail },
  { path: "/kontak", name: "kontak", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
