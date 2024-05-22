import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import {employeesApi } from '../app/services/employees';
import { CommonResponse } from '../utils/CommonResponse';

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
