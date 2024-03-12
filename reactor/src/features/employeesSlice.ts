import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { CommonResponse, employeesApi } from '../app/services/employees';

interface InitialState {
    areas: CommonResponse | null;
}

const initialState: InitialState = {
    areas: null,
};
interface Option {
    value: string;
    label: string;
    children?: Option[];
}

export const roles: Option[] = [
    {
        value: 'admin',
        label: 'Администратор',
        children: [
            {
                value: '1',
                label: 'Внесение входных данных',
            },
            {
                value: '2',
                label: 'Разработка технических данных',
            },
            {
                value: '3',
                label: 'Разработка КД',
            },
            {
                value: '4',
                label: 'Разработка ИДП и ПС',
            },
            {
                value: '5',
                label: 'Согласование',
            },
            {
                value: '6',
                label: 'Подготовка и проверка заказа',
            },
        ],
    },
    {
        value: 'worker',
        label: 'Рабочий',
    },
    {
        value: 'STK',
        label: 'СТК',
    },
    {
        value: 'stage',
        label: 'Склад',
    },
];

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
