import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import MainMenu from "../views/MainMenu.vue";
import Pin from "../views/Pin.vue";
import CardChooser from "../views/CardChooser.vue";
import CheckBalance from "../views/CheckBalance.vue";

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
  },
  {
    path: "/cardchooser",
    name: "Card chooser",
    component: CardChooser
  },
  {
    path: "/mainmenu",
    name: "Main menu",
    component: MainMenu
  },
  {
    path: "/checkbalance",
    name: "CheckBalance",
    component: CheckBalance
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
