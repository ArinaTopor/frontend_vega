import { api } from './api';
import { ReturnedData } from '../../utils/ReturnedData';

export type CommonResponse = {
    [key: string]: number;
};

export type NewOrder = {
	'KKS': string;
	'files': File[];
	'Description': string;
	[key: string]: string | File[] | null;
};

export const ordersApi = api.injectEndpoints({
	endpoints: (builder) => ({
		addOrders: builder.mutation<ReturnedData, FormData>({
			query: (data) => ({
				url: '/Order',
				method: 'POST',
				body: data,
			}),
		}),
		getStat: builder.query<CommonResponse, void>({
			query: () => ({
				url: 'Order/statistics',
				method: 'GET'
			})
		})
	}),
});

export const { useAddOrdersMutation, useGetStatQuery } = ordersApi;
export const {endpoints: {addOrders, getStat}} = ordersApi;
