import { api } from "./api";

export type User = {
    userLogin: string;
    password: string;
}
type ResponseLoginData = User & {token: string}

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, User>(
        {query: (user) => 
       ({url: `/api/Auth`,
        method: 'POST', 
        mode: 'no-cors',
        body: user})}
        )
    })
})

export const {useLoginMutation} = authApi
export const {endpoints: {login}} = authApi
