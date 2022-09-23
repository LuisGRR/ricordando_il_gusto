import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Platillos from "../views/Platillos-home.vue";
import About from "../views/About-Pagina.vue";
import Ilimitados from "../views/Platillos-limitados.vue";
import Contacto from "../views/Contacto-redes.vue";
import infoPlatillo from "../views/InfoPlatillo.vue";
import paginaError from "../views/paginaError.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Platillos",
      name: "platillos",
      component: Platillos,
    },
    {
      path: "/About",
      name: "about",
      component: About,
    },
    {
      path: "/Ilimitados",
      name: "ilimitados",
      component: Ilimitados,
    },
    {
      path: "/Contacto",
      name: "contacto",
      component: Contacto,
    },
    {
      path: "/Platillo",
      name: "platillo",
      component: infoPlatillo,
    },
    {
      path: "/404",
      component: paginaError,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
  ],
});

export default router;
