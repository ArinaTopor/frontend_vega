import { createListenerMiddleware } from '@reduxjs/toolkit';
import { authApi } from '../services/auth';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();

        if (action.payload.accessToken && action.payload.refreshToken) {
            localStorage.setItem('token', action.payload.accessToken);
            localStorage.setItem('refresh', action.payload.refreshToken);
        }
    },
});

listenerMiddleware.startListening({
    matcher: authApi.endpoints.refreshToken.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();

        if (action.payload.accessToken && action.payload.refreshToken) {
            localStorage.setItem('token', action.payload.accessToken);
            localStorage.setItem('refresh', action.payload.refreshToken);
        }
    },
});
