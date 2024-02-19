import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
    retry,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { logout } from '../../features/auth/authSlice';
import { authApi } from './auth';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://localhost:7185/api',
    prepareHeaders: (headers, { getState }) => {
        const token =
            (getState() as RootState).auth.token?.accessToken ||
            localStorage.getItem('token');

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });
const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        // try to get a new token
        // const refeshResult = authApi.endpoints.refreshToken({
        //               accessToken: localStorage.getItem('token'),
        //               refreshToken: localStorage.getItem('refresh'),
        //           })
        const refreshResult = await baseQuery(
            {
                url: `/Auth/refresh-token`,
                method: 'POST',
                body: {
                    accessToken: localStorage.getItem('token'),
                    refreshToken: localStorage.getItem('refresh'),
                },
            },
            api,
            extraOptions
        );

        if (refreshResult.data) {
            // store the new token in the store or wherever you keep it
            // api.dispatch(tokenReceived(refreshResult.data));
            // retry the initial query
            const refeshTokenResult = refreshResult.data as any;

            // store the new token
            localStorage.setItem('token', refeshTokenResult.data.accessToken);
            localStorage.setItem(
                'refresh',
                refeshTokenResult.data.refreshToken
            );
            localStorage.setItem('kk', 'fffff');
            result = await baseQuery(args, api, extraOptions);
        } else {
            // refresh failed - do something like redirect to login or show a "retry" button
            console.log(refreshResult.data);
            api.dispatch(logout());
        }
    }
    return result;
};
// const baseQueryWithReauth: BaseQueryFn<
//     string | FetchArgs,
//     unknown,
//     FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions);

//     if (result.error && result.error.status === 401) {
//         // Получаем accessToken из localStorage
//         const accessToken = localStorage.getItem('accessToken');

//         // Проверяем, что accessToken существует
//         if (accessToken) {
//             // Отправляем запрос на обновление токена, используя текущий accessToken
//             const refreshResult = await baseQuery(
//                 '/Auth/refresh-token',
//                 { ...api, baseQueryArgs: accessToken }, // Передаем accessToken как аргумент запроса
//                 extraOptions
//             );

//             if (refreshResult.data) {
//                 // Если получен новый токен, сохраняем его и повторно выполняем исходный запрос
//                 localStorage.setItem('accessToken', refreshResult.data.accessToken);
//                 result = await baseQuery(args, api, extraOptions);
//             } else {
//                 // Если обновление токена не удалось, выполняем какие-то действия, например, разлогиниваем пользователя
//                 api.dispatch(logout());
//             }
//         } else {
//             // Если accessToken не найден в localStorage, выполняем какие-то действия, например, разлогиниваем пользователя
//             api.dispatch(logout());
//         }
//     }
//     return result;
// };
export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithReauth,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
});
