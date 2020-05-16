const isDevelopment = process.env.NODE_ENV === 'development';

export const API_BASE_URL = isDevelopment ? 'http://localhost:8000' : '';

export const MAIN_PAGE_OPERATIONS = [
  {
    name: 'Check balance',
    path: '/checkbalance',
  },
  {
    name: 'Withdraw',
    path: '/withdraw',
  },
  {
    name: 'Deposit',
    path: '/deposit',
  },
  {
    name: 'Transaction history',
    path: '/transaction/hisotory',
  },
  {
    name: 'Credit card history',
    path: '/creditcard/history',
  },
];
