export const Paths = {
    products: '/products',
    nomenclature: '/nomenclature',
    login: '/login',
    tasksBoadr: '/taskBoard',
    workerMain: '/home',
    adminMain: '/adminHome',
    stkMain: '/stkHome',
} as const;
export const MainPageRoles: { worker: string; admin: string; stk: string } = {
    worker: '/home',
    admin: '/adminHome',
    stk: '/stkHome',
};
