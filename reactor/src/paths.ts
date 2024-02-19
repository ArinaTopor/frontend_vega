export const Paths = {
    products: '/products',
    nomenclature: '/nomenclature',
    login: '/',
    tasksBoard: '/taskBoard',
    workerMain: '/home',
    adminMain: '/adminHome',
    stkMain: '/stkHome',
    options: '/options'
} as const;
export const MainPageRoles: { worker: string; admin: string; stk: string } = {
    worker: '/home',
    admin: '/adminHome',
    stk: '/stkHome',
};
