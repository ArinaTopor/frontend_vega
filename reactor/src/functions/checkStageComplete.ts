import { ChangeData, MaterialTable } from '../utils/Orders';

export const checkStage = (materialInfo: MaterialTable) => {
    return Object.keys(materialInfo).every(
        (key) => materialInfo[key].amount === materialInfo[key].count
    );
};

export const formattedData = (materialInfo: MaterialTable): ChangeData => {
    return Object.keys(materialInfo).reduce((result, key) => {
        result[key] = materialInfo[key].amount.toString();
        return result;
    }, {} as ChangeData);
};
