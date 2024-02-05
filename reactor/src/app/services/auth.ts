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
    role: 'admin' | 'worker' | 'stk';
};

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: '/Auth',
                method: 'POST',
                body: userData,
            }),
        }),
        current: builder.query<InfoUser, void>({
            query: () => ({
                url: '/VegaUser',
                method: 'GET',
            }),
        }),
    }),
});

export const { useLoginMutation, useCurrentQuery } = authApi;

export const {
    endpoints: { login, current },
} = authApi;
