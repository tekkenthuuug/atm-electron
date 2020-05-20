const isDevelopment = process.env.NODE_ENV === "development";

export const API_BASE_URL = isDevelopment
  ? "http://localhost:8000"
  : "https://atm-backend-sp.herokuapp.com";

export const MAIN_MENU_OPERATIONS = [
  {
    name: "Check balance",
    path: "/mainmenu/checkbalance"
  },
  {
    name: "Withdraw",
    path: "/mainmenu/withdraw"
  },
  {
    name: "Deposit",
    path: "/mainmenu/deposit"
  },
  {
    name: "Transaction history",
    path: "/transaction/history"
  },
  {
    name: "Credit card history",
    path: "/creditcard/history"
  }
];
