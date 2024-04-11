import { api } from './api';
import { ReturnedData } from '../../utils/ReturnedData';

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
	}),
});

export const { useAddOrdersMutation } = ordersApi;
export const {endpoints: {addOrders}} = ordersApi;
