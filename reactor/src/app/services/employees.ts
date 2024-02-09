import { ReturnedData } from '../../utils/ReturnedData';
import { api } from './api';

export type CommonResponse = {
    [key: string]: string;
};

export type NewUser = {
    login: string;
    password: string;
    name: string;
    roleId: number;
    areaId: number;
};

export const employeesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAreas: builder.query<CommonResponse, void>({
            query: () => ({
                url: '/Config/area',
                method: 'GET',
            }),
        }),
        getRoles: builder.query<CommonResponse, void>({
            query: () => ({
                url: '/Config/role',
                method: 'GET',
            }),
        }),
        addUser: builder.mutation<ReturnedData, NewUser>({
            query: (data) => ({
                url: '/Config/user',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useAddUserMutation, useGetAreasQuery, useGetRolesQuery } =
    employeesApi;
export const {
    endpoints: { getAreas, getRoles, addUser },
} = employeesApi;
