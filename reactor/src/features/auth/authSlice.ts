import { createSlice } from '@reduxjs/toolkit';
import { ResponseLoginData, InfoUser, authApi } from '../../app/services/auth';
import { RootState } from '../../app/store';
import { redirect, useNavigate } from 'react-router';

interface InitialState {
    token: ResponseLoginData | null;
    user: InfoUser | null;
    isAuth: boolean;
}
const initialState: InitialState = {
    token: null,
    user: null,
    isAuth: false,
};
// const logout = () => {
//     const navigate = useNavigate();

//     return () => {
//         localStorage.clear();
//         navigate('/login');
//         return initialState;
//     };
// };
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => {
            localStorage.clear();
            return initialState;
        },
        refresh: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('refreshToken', action.payload.refreshToken);
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.login.matchFulfilled,
                (state, action) => {
                    state.token = action.payload;
                    state.isAuth = true;
                }
            )
            .addMatcher(
                authApi.endpoints.current.matchFulfilled,
                (state, action) => {
                    state.user = action.payload;
                    state.isAuth = true;
                }
            );
    },
});

export const { logout, refresh } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuth;
export const selectUser = (state: RootState) => state.auth.user;
