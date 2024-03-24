import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { CommonResponse, employeesApi } from '../app/services/employees';

interface InitialState {
    areas: CommonResponse | null;
}

const initialState: InitialState = {
    areas: null,
};

const slice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            employeesApi.endpoints.getAreas.matchFulfilled,
            (state, action) => {
                state.areas = action.payload;
            }
        );
    },
});

export default slice.reducer;
export const selectEmployeesAreas = (state: RootState) => state.employees.areas;
