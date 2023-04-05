import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/Home.vue";


Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: false,
      hideNavbar: false,
      hideFooter: false
    }
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: false,
      hideNavbar: false,
      hideFooter: false
    }
  },
  {
    path: "/church",
    name: "Church",
    component: ChurchPage,
    meta: {
      requiresAuth: false,
      hideNavbar: false,
      hideFooter: false
    }
  }
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