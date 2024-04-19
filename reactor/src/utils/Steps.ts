import { Step } from './Step';

export type Step_info = Step & { children: Step[] };

export type Steps = {
    [key: string]: {
        kks: string;
        steps_info: Step_info[];
    };
};
