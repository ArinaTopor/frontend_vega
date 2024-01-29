import { api } from "./api";

export type User = {
    login: string;
    password: string;
}
type ResponseLoginData = User & {token: string}

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, User>(
        {query: (user) => 
       ({url: `/api/Auth?userLogin=${user.login}&password=${user.password}`,
        method: 'POST', 
        mode: 'no-cors'})}
        )
    })
})

export const {useLoginMutation} = authApi
export const {endpoints: {login}} = authApi
