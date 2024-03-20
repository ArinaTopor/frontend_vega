import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { CommonResponse, employeesApi } from '../app/services/employees';

interface InitialState {
    areas: CommonResponse | null;
}

const initialState: InitialState = {
    areas: null,
};
export interface Option {
    value: string;
    label: string;
    children?: Option[];
}

export const roles: Option[] = [
    {
        value: '1',
        label: 'Администратор',
    },
    {
        value: '5',
        label: 'Внесение файлов',
        children: [
            {
                value: '6',
                label: 'Внесение входной документации',
            },
            {
                value: '7',
                label: 'Разработка технических данных',
            },
            {
                value: '8',
                label: 'Внесение чертежей и спецификации',
            },
            {
                value: '9',
                label: 'Разработка ИДП и ПС',
            },
            {
                value: '10',
                label: 'Согласование АЭП',
            },
            {
                value: '11',
                label: 'Отдел поставки',
            },
            {
                value: '12',
                label: 'Склад',
            },
            {
                value: '13',
                label: 'Внесение электросхемы',
            },
        ],
    },
    {
        value: '2',
        label: 'Рабочий',
    },
    {
        value: '3',
        label: 'СТК',
    },
    {
        value: '4',
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
