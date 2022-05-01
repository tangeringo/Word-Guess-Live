export const returnColoredArr = (coloredLetters) => {
    const coloredArr = [];

    coloredLetters.map(item => {
        if (item !== undefined) {
            coloredArr.push(item.props.letter);
        }
    });

    return coloredArr;
}


export const compareArrays = (coloredArr, genWord) => {
    let bool = undefined;
    let boolArr = [];

    for (let i = 0; i < genWord.length; i++) {
        const genLetter = genWord[i]
        const coloredLetter = coloredArr[i];
        
        if (genLetter === coloredLetter) {
            bool = true;
            boolArr.push(bool)
        } else {
            bool = false;
            boolArr.push(bool)
        }

    }

    if (boolArr.includes(false)) return false;
    return true;
}


export const returnColoredLetters = (genWord) => {
    const coloredLetters = [];

    for (let i = 0; i < genWord.length; i++) {
        coloredLetters.push('');
    }

    return coloredLetters
}