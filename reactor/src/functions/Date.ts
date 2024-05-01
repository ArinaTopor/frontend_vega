export const getDate = () => {
    const currentDate = new Date();
    const stringDate: string = `${String(currentDate.getDate()).padStart(
        2,
        '0'
    )}.${String(currentDate.getMonth() + 1).padStart(
        2,
        '0'
    )}.${currentDate.getFullYear()}`;
    return stringDate;
};
