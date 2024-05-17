import { InfoUser } from '../app/services/auth';
import { Step_info } from '../utils/Orders';
import { Step } from '../utils/Step';

export function checkPrivileges(
    stepsInfo: Step_info[],
    idStepCurrentUser: number
): boolean {
    let addDocuments = stepsInfo.find((step) =>
        step.step_id === idStepCurrentUser - 1 ? step.is_completed : false
    );
    if (!addDocuments) {
        addDocuments = stepsInfo.find((step) =>
            step.children.find(
                (stepChild) => stepChild.step_id === idStepCurrentUser - 1
            )
        );
    }
    return addDocuments ? true : false;
}

export function isCanAddDocument(
    user: InfoUser,
    role: string,
    step: Step,
    idPrivelege: string,
    stepsInfo: Step_info[],
    idStep: number
) {
    return (
        step.step_name === role &&
        Object.keys(user.privileges).includes(idPrivelege) &&
        checkPrivileges(stepsInfo, idStep)
    );
}
