import { api } from './api';
import { ReturnedData } from '../../utils/ReturnedData';
import { CommonResponse } from '../../utils/CommonResponse';
import { Orders } from '../../utils/Orders';

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
    useGetStatQuery,
    useGetPagesQuery,
    useGetInfoOrdersQuery,
} = ordersApi;
export const {
    endpoints: { addOrders, getStat, getInfoOrders, getPages },
} = ordersApi;
