export const getCurrentFullDate = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    return { day, month }
}