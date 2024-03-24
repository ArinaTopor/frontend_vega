import { Option } from '../utils/Option';

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
