import { api } from './api';

export type ResponseLoginData = {
    accessToken: string | null;
    refreshToken: string | null;
};
export type LoginData = {
    login: string;
    password: string;
};
export type InfoUser = {
    login: string;
    name: string | null;
    role: string[];
};

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, LoginData>({
            query: (userData) => ({
                url: '/Auth/login',
                method: 'POST',
                body: userData,
            }),
        }),
        current: builder.query<InfoUser, void>({
            query: () => ({
                url: '/Users',
                method: 'GET',
            }),
        }),
    }),
});

export const { useLoginMutation, useCurrentQuery } = authApi;

export const {
    endpoints: { login, current },
} = authApi;
