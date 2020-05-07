import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pin from "../views/Pin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pin",
    name: "Pin",
    component: Pin
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
