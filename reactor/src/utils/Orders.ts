import { Step } from './Step';

export type Step_info = Step & { children: Step[] };

export type Orders = {
    [key: string]: {
        kks: string;
        is_completed: boolean;
        steps_info: Step_info[];
    };
};
