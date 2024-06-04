import { CustomFile } from './FileType';

export type Step = {
    step_id: number;
    step_name: string;
    responsible: {
        login: string;
        name: string;
    };
    children?: Step[];
    is_completed: boolean;
    comment?: string;
    files: CustomFile[];
};
