import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/Home.vue";
import TogelPage from "../pages/Togel.vue";
import SlotPage from "../pages/Slot.vue";
import CasinoPage from "../pages/Casino.vue";
import GamesPage from "../pages/Games.vue";
import SportsPage from "../pages/Sports.vue";


Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: "/togel",
    name: "Togel",
    component: TogelPage,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: "/slot",
    name: "Slot",
    component: SlotPage,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: "/casino",
    name: "Casino",
    component: CasinoPage,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: "/games",
    name: "Games",
    component: GamesPage,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: "/sports",
    name: "Sports",
    component: SportsPage,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: "/promo",
    name: "Promo",
    component: HomePage,
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: "/mobile",
    name: "Mobile",
    component: HomePage,
    meta: {
      requiresAuth: false,
    }
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  // Redirect if fullPath begins with a hash (ignore hashes later in path)
  if (to.fullPath.substr(0,2) === "/#") {
      window.scrollTo(0, 0);
      const path = to.fullPath.substr(2);
      next(path);
      return;
  }
  next();
});