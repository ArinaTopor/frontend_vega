import { Step_info } from '../utils/Orders';

export const getFileApproval = (
    stepsInfo: Step_info[],
    idStepCurrentUser: number
) => {
    return stepsInfo.find((step) => step.step_id === idStepCurrentUser - 1);
};
