export const Paths = {
    products: '/products',
    nomenclature: '/nomenclature',
    login: '/',
    tasksBoard: '/taskBoard',
    workerMain: '/home',
    adminMain: '/adminHome',
    stkMain: '/stkHome',
    options: '/options',
    orderFiles: '/orderFiles',
    files: '/files',
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
