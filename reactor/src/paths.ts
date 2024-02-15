export const Paths = {
    products: '/products',
    nomenclature: '/nomenclature',
    login: '/',
    tasksBoadr: '/taskBoard',
    workerMain: '/home',
    adminMain: '/adminHome',
    stkMain: '/stkHome',
} as const;
export const MainPageRoles: {
    worker: string;
    admin: string;
    stk: string;
    storage: string;
} = {
    worker: '/home',
    admin: '/adminHome',
    stk: '/stkHome',
    storage: 'storageHome',
};
