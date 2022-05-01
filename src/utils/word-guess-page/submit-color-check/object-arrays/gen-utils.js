export const getLettersCountNumber = (array, letter) => {
    let count = 0;

    array.forEach(item => {
        if (item === letter) return count += 1;
    });

    return count;
}