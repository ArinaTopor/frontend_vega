import { api } from './api';

export type ResponseLoginData = {
    accessToken: string | null;
    refreshToken: string | null;
};
type UserData = {
    login: string;
    password: string;
};
export type InfoUser = {
    login: string;
    name: string | null;
    role: 'admin' | 'worker' | 'stk' | 'storage';
};

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: '/Auth/login',
                method: 'POST',
                body: userData,
            }),
        }),
        current: builder.query<InfoUser, void>({
            query: () => ({
                url: '/User',
                method: 'GET',
            }),
        }),
        refreshToken: builder.query<ResponseLoginData, ResponseLoginData>({
            query: (data) => ({
                url: '/Auth/refresh-token',
                method: 'POST',
                body: { data },
            }),
        }),
    }),
});

export const { useLoginMutation, useCurrentQuery } = authApi;

export const {
    endpoints: { login, current, refreshToken },
} = authApi;
