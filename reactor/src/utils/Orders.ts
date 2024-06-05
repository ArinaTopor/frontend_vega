import { Step } from './Step';

export type MaterialTable = {
    [key: string]: {
        amount: number;
        count: number;
        designation: string;
        material: string;
        measure: string;
        name: string;
        objectType: string;
    };
};

export type ChangeData = {
    [key: string]: string;
};

export type Orders = {
    [key: string]: {
        component_info: MaterialTable;
        kks: string;
        is_completed: boolean;
        steps_info: Step[];
    };
};
