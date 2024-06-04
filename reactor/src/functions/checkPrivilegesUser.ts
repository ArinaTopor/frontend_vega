import { InfoUser } from '../app/services/auth';
import { Step } from '../utils/Step';

export function checkPrivileges(
    stepsInfo: Step[],
    idStepCurrentUser: number
): boolean {
    let addDocuments = stepsInfo.find((step) => {
        return step.step_id === idStepCurrentUser - 1
            ? step.is_completed
            : false;
    });
    if (!addDocuments && idStepCurrentUser === 4) {
        addDocuments = stepsInfo.find((step) => {
            return step.step_id === idStepCurrentUser - 2
                ? step.is_completed
                : false;
        });
    }
    if (!addDocuments) {
        addDocuments = stepsInfo.find(
            (step) =>
                step.children &&
                step.children.find((stepChild) => {
                    return stepChild.step_id === idStepCurrentUser - 1
                        ? true
                        : false;
                })
        );
    }
    return addDocuments ? true : false;
}

export function isCanAddDocument(
    user: InfoUser,
    role: string,
    step: Step,
    userPrivilege: string,
    stepsInfo: Step[],
    idStep: number
) {
    return (
        step.step_name === user.role &&
        step.step_name === role &&
        Object.keys(user.privileges).find((privilege) =>
            user.privileges[privilege].name.localeCompare(userPrivilege)
        ) &&
        checkPrivileges(stepsInfo, idStep)
    );
}
