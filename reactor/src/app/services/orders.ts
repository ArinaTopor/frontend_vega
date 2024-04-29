import { api } from './api';
import { ReturnedData } from '../../utils/ReturnedData';
import { CommonResponse } from '../../utils/CommonResponse';
import { Orders } from '../../utils/Orders';

export type FileT = {
    filename: string;
    path: string;
    upload_date: Date;
    is_needed_to_change: boolean;
    status_id: 0 | 1 | 2;
    step: string;
};
export interface FilesInfo {
    [key: string]: {
        kks: string;
        files_info: FileT[];
    };
}
export type kks = {
    [key: string]: string;
};
export interface ResponseFile {
    fileStream: string;
    contentType: 'image/png';
}

export type NewOrder = {
    KKS: string;
    files: File[];
    Description: string;
    [key: string]: string | File[] | null;
};

export const ordersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getStat: builder.query<CommonResponse, void>({
            query: () => ({
                url: 'Order/statistics',
                method: 'GET',
            }),
        }),
        addOrders: builder.mutation<ReturnedData, FormData>({
            query: (data) => ({
                url: '/Order',
                method: 'POST',
                body: data,
            }),
        }),
        getPages: builder.query<number, void>({
            query: () => ({
                url: '/Order/pages',
                method: 'GET',
            }),
        }),
        getAllKKS: builder.query<kks, void>({
            query: () => ({
                url: '/Order/kks',
                method: 'GET',
            }),
        }),
        getAllFilesByKKS: builder.query<FilesInfo, string>({
            query: (kks) => ({
                url: `/Order/files/info?kkss=${kks}`,
                method: 'GET',
            }),
        }),
        getFileByName: builder.query<ResponseFile, string>({
            query: (path) => ({
                url: `/Order/files/?path=${path}`,
                method: 'GET',
        })
    }),

        getInfoOrders: builder.query<Orders, number>({
            query: (page) => ({
                url: `Order/info?page=${page}`,
                method: 'GET',
            }),
        }),
    }),
})


export const {
    useAddOrdersMutation,
    useGetStatQuery,
    useGetPagesQuery,
    useGetInfoOrdersQuery,
    useGetAllFilesByKKSQuery,
    useGetAllKKSQuery,
    useGetFileByNameQuery,
} = ordersApi;
export const {
    endpoints: { addOrders, getStat, getInfoOrders, getPages, getAllFilesByKKS, getAllKKS, getFileByName  },
} = ordersApi;
