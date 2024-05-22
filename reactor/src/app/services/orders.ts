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

export type CompleteStep = {
    files: File[];
    KKS: string;
    StepId: number;
    description: string;
    IsApproved?: boolean;
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
        completeStep: builder.mutation<ReturnedData, FormData>({
            query: (data) => ({
                url: '/Order/steps',
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
        getAllKKS: builder.query<CommonResponse, void>({
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
            }),
        }),

        getInfoOrders: builder.query<Orders, number>({
            query: (page) => ({
                url: `Order/info?page=${page}`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useAddOrdersMutation,
    useCompleteStepMutation,
    useGetStatQuery,
    useGetPagesQuery,
    useGetInfoOrdersQuery,
    useGetAllFilesByKKSQuery,
    useGetAllKKSQuery,
    useGetFileByNameQuery,
} = ordersApi;
export const {
    endpoints: {
        addOrders,
        completeStep,
        getStat,
        getInfoOrders,
        getPages,
        getAllFilesByKKS,
        getAllKKS,
        getFileByName,
    },
} = ordersApi;
