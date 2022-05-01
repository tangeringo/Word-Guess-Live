export const countLetterRepetition = (array, letter) => {
    let count = 0;

    array.forEach(item => {
        if (item === letter) return count += 1;
    });

    return count
}

export const typedLetterRepetitionObj = (array, letter) => {
    let letterObj = { letter: '', count: 0 }
    
    if (!array.includes(letter)) {
        letterObj = { letter: letter, count: 1 }
    }
    
    if (array.includes(letter)) {
        const count = countLetterRepetition(array, letter);
        letterObj = { letter: letter, count: count }
    }
    
    return letterObj;
}