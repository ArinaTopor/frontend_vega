import { api } from './api';
import { ReturnedData } from '../../utils/ReturnedData';

export type CommonResponse = {
    [key: string]: number;
};

export type NewOrder = {
    KKS: string;
    files: File[];
    Description: string;
    [key: string]: string | File[] | null;
};
export type file = {
    filename: string;
    path: string;
    upload_date: string;
    is_needed_to_change: boolean;
};

export type step = {
    step_id: number;
    step_name: string;
    responsible: {
        login: string;
        name: string;
    };
    is_completed: boolean;
    files: file[];
};
export type step_info = step & { children: step[] };

type steps = {
    [key: string]: {
        kks: string;
        steps_info: step_info[];
    };
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

        getInfoOrders: builder.query<steps, number>({
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
