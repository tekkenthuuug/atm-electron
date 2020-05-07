import Vue from "vue";
import VueRouter from "vue-router";
import ATMHome from "../views/ATMHome.vue";
import Pin from "../views/Pin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ATMHome
  },
  {
    path: "/pin",
    name: "PIN",
    component: Pin
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
