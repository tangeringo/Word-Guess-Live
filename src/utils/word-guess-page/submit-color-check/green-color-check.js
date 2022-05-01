import { returnGreenLetter } from "./square-colors/square-colors";

export const countSameArrSymbols = (array, letter) => {
    let count = 0;

    array.forEach(item => {
        if (item.props.letter === letter) return count += 1;
    });

    return count
}

export const returnAllGreenLetters = (
    genWord, typedWord, greenLetters, coloredLetters, delay
) => {

    const genWordString = genWord.join('');
    const typedWordString = typedWord.join('');

    for (let i = 0; i < genWord.length; i++) {
        const currentLetter = typedWordString.charAt(i);
        let currentGenLetter = genWordString.charAt(i);
        let letter = null;
        delay += 0.3;

        if (currentLetter === currentGenLetter) {
            letter = returnGreenLetter(currentLetter, delay);
            greenLetters.push(letter);
            coloredLetters.splice(i, 1); 
            coloredLetters.splice(i, 0, letter);
        }
    }
}