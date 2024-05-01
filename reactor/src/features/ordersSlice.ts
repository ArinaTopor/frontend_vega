import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { ordersApi } from '../app/services/orders';
import { CommonResponse } from '../utils/CommonResponse';

interface InitialState {
    pages: number | null;
    allKKS: CommonResponse;
}

const initialState: InitialState = {
    pages: null,
    allKKS: {},
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
        builder.addMatcher(
            ordersApi.endpoints.getAllKKS.matchFulfilled,
            (state, action) => {
                state.allKKS = action.payload;
            }
        );
    },
});
export default slice.reducer;
export const selectOrdersPages = (state: RootState) => state.orders.pages;
export const selectAllKks = (state: RootState) => state.orders.allKKS;
