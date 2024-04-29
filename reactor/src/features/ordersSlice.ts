import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { ordersApi } from '../app/services/orders';

interface InitialState {
    pages: number | null;
}

const initialState: InitialState = {
    pages: null,
};

const slice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            ordersApi.endpoints.getPages.matchFulfilled,
            (state, action) => {
                state.pages = action.payload;
            }
        );
    },
});
export default slice.reducer;
export const selectOrdersPages = (state: RootState) => state.orders.pages;
