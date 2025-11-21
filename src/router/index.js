import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";
import AboutPage from "@/components/pages/AboutPage.vue";
import GalleryPage from "@/components/pages/GalleryPage.vue";
import ServicePage from "@/components/pages/ServicePage.vue";
import ContactPage from "@/components/pages/ContactPage.vue";
import ServiceDetail from "@/components/pages/ServiceDetail.vue";

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
  // Scroll biar keatas
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
