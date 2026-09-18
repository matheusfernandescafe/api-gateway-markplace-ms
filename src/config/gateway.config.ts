export const serviceConfig = {
  users: {
    url: process.env.USERS_SERVICE_URL || 'http://localhost:3000',
    timeout: 10000,
  },
  products: {
    url: process.env.USERS_SERVICE_URL || 'http://localhost:3001',
    timeout: 10000,
  },
  checkout: {
    url: process.env.USERS_SERVICE_URL || 'http://localhost:3003',
    timeout: 10000,
  },
  payments: {
    url: process.env.USERS_SERVICE_URL || 'http://localhost:3004',
    timeout: 10000,
  },
} as const;