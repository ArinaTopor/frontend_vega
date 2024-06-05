import { Step } from '../utils/Step';

export const getFileApproval = (
    stepsInfo: Step[],
    idStepCurrentUser: number
) => {
    return stepsInfo.find((step) => step.step_id === idStepCurrentUser - 1);
};
