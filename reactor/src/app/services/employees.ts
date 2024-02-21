import { ReturnedData } from '../../utils/ReturnedData';
import { api } from './api';
import { InfoUser } from './auth';

export type CommonResponse = {
    [key: string]: string;
};

export type NewUser = {
    login: string;
    password: string;
    name: string;
    roleId: number;
    areaId: number;
    [key: string]: string | number;
};

export type EditAdminInfo = {
    login: string;
    password?: string;
    name: string | null;
};

export const employeesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAreas: builder.query<CommonResponse, void>({
            query: () => ({
                url: '/Config/area',
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
        editAdminInfo: builder.mutation<InfoUser, EditAdminInfo>({
            query: (data) => ({
                url: '/Config/user',
                method: 'PATCH',
                body: data,
            }),
        }),
    }),
});

export const {
    useAddUserMutation,
    useGetAreasQuery,
    useEditAdminInfoMutation,
} = employeesApi;
export const {
    endpoints: { getAreas, addUser, editAdminInfo },
} = employeesApi;
