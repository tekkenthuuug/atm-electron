import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import MainMenu from "../views/MainMenu.vue";
import Pin from "../views/Pin.vue";
import CardChooser from "../views/CardChooser.vue";
import CheckBalance from "../views/CheckBalance.vue";
import Withdraw from "../views/Withdraw.vue";
import Transactions from "../views/Transactions.vue";
import CreditCardHistory from "../views/CreditCardHistory.vue";
import Deposit from "../views/Deposit.vue";

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
    path: "/mainmenu/checkbalance",
    name: "Check Balance",
    component: CheckBalance
  },
  {
    path: "/mainmenu/withdraw",
    name: "Withdraw",
    component: Withdraw
  },
  {
    path: "/mainmenu/deposit",
    name: "Deposit",
    component: Deposit
  },
  {
    path: "/transaction/history",
    name: "Transactions history",
    component: Transactions
  },
  {
    path: "/creditcard/history",
    name: "Credit card history",
    component: CreditCardHistory
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
