import { createListenerMiddleware } from '@reduxjs/toolkit';
import { authApi } from '../services/auth';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();

        if (action.payload.accessToken) {
            localStorage.setItem('token', action.payload.accessToken);
        }
    },
});
