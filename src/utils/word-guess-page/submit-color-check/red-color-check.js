import { returnRedLetter } from "./square-colors/square-colors";

export const returnAllRedLetters = (
    genWord, typedWord, coloredLetters, delay
) => {
    const genWordString = genWord.join('');
    const typedWordString = typedWord.join('');

    for (let i = 0; i < genWord.length; i++) {        
        const currentLetter = typedWordString.charAt(i);
        let letter = null;
        delay += 0.3;

        if (!genWordString.includes(currentLetter)) {
            letter = returnRedLetter(currentLetter, delay);
            coloredLetters.splice(i, 1); 
            coloredLetters.splice(i, 0, letter);
        }
    }
}