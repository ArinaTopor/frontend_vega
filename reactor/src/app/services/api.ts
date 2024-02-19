import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
    retry,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { logout, refresh } from '../../features/auth/authSlice';
import { ResponseLoginData } from './auth';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://localhost:7185/api',
    prepareHeaders: (headers, { getState }) => {
        const token =
            (getState() as RootState).auth.token?.accessToken ||
            localStorage.getItem('accessToken');

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        const refreshResult = await baseQuery(
            {
                url: `/Auth/refresh-token`,
                method: 'POST',
                body: {
                    accessToken: localStorage.getItem('accessToken'),
                    refreshToken: localStorage.getItem('refreshToken'),
                },
            },
            api,
            extraOptions
        );

        if (refreshResult.data) {
            const refeshTokenResult = refreshResult.data as ResponseLoginData;
            api.dispatch(refresh(refeshTokenResult));
            localStorage.setItem('kk', 'fffff');
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }
    return result;
};

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithReauth,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
});
