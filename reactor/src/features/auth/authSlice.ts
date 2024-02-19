import { createSlice } from '@reduxjs/toolkit';
import { ResponseLoginData, InfoUser, authApi } from '../../app/services/auth';
import { RootState } from '../../app/store';

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
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
        // refreshToken: (initialState) => {

        // }
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

export const { logout } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuth;
export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;
