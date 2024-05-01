export const Paths = {
    products: '/products',
    nomenclature: '/nomenclature',
    login: '/',
    tasksBoard: '/taskBoard',
    workerMain: '/home',
    adminMain: '/adminHome',
    stkMain: '/stkHome',
    options: '/options',
    file: '/file/:path',
    tableFiles: '/files',
    orderFiles: '/files/:kks',
};

export const MainPageRoles: {
    worker: string;
    admin: string;
    stk: string;
    storage: string;
} = {
    worker: '/home',
    admin: '/taskBoard',
    stk: '/stkHome',
    storage: 'storageHome',
};
