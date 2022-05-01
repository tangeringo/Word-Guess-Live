import { returnColoredLetters } from './root-check-utils';

import { returnAllGreenLetters } from '../green-color-check';
import { returnAllRedLetters } from '../red-color-check';
import { returnAllGreyLetters } from '../grey-color-check/grey-color-check';


export const checkSubmitedLetters = (genWord, typedWord) => {
    const coloredLetters = returnColoredLetters(genWord);
    const greenLetters = [];
    const greyLetters = [];

    let delay = 0; 

    // GREEN LETTERS
    returnAllGreenLetters(
        genWord, typedWord, greenLetters, coloredLetters, delay
    );

    // RED LETTERS
    returnAllRedLetters(
        genWord, typedWord, coloredLetters, delay
    );

    // GREY LETTER
    returnAllGreyLetters(
        genWord, typedWord, coloredLetters, greenLetters, greyLetters, delay
    );

    return coloredLetters;
}