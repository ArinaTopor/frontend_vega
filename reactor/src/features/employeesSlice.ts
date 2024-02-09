import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import {
    CommonResponse,
    employeesApi,
    useGetAreasQuery,
} from '../app/services/employees';

interface InitialState {
    roles: CommonResponse | null;
    areas: CommonResponse | null;
}

const initialState: InitialState = {
    roles: null,
    areas: null,
};

const slice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                employeesApi.endpoints.getRoles.matchFulfilled,
                (state, action) => {
                    state.roles = action.payload;
                }
            )
            .addMatcher(
                employeesApi.endpoints.getAreas.matchFulfilled,
                (state, action) => {
                    state.areas = action.payload;
                }
            );
    },
});

export default slice.reducer;
export const selectEmployeesAreas = (state: RootState) => state.employees.areas;
export const selectEmployeesRoles = (state: RootState) => state.employees.roles;
