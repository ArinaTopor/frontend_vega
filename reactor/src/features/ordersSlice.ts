import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { kks, ordersApi } from '../app/services/orders';
interface InitialState {
    allKKS: kks;
}

const initialState: InitialState = {
    allKKS: {},
};

const slice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            ordersApi.endpoints.getAllKKS.matchFulfilled,
            (state, action) => {
                state.allKKS = action.payload;
            }
        );
    },
});
export default slice.reducer;
export const selectAllKKS = (state: RootState) => state.orders.allKKS;
