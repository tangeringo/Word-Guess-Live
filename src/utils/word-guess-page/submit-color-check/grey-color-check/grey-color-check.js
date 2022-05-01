import { setTypedWordObjArray } from '../object-arrays/typed-object-arr';
import { setGeneratedWordObjArray } from '../object-arrays/gen-object-arr';

import { 
    returnGenLetterObjArr,
    returnTypedLetterObjArr,
    defineRedOrGreyBg
} from './grey-arr-auth';

export const returnAllGreyLetters = (
    genWord, typedWord, coloredLetters, greenLetters, greyLetters, delay
) => {

    const genObjArr = setGeneratedWordObjArray(genWord);
    const typedObjArr = setTypedWordObjArray(typedWord);

    const generatedWordString = genWord.join('');
    const typedWordString = typedWord.join('');

    for (let i = 0; i < genWord.length; i++) {        
        const currentLetter = typedWordString.charAt(i);
        let letter = null;
        delay += 0.3;

        if (currentLetter !== generatedWordString.charAt(i)) {
            if (generatedWordString.includes(currentLetter)) {
                let idx = i;
                returnGenLetterObjArr(genObjArr)
                returnTypedLetterObjArr(typedObjArr)
                letter = defineRedOrGreyBg(currentLetter, idx, delay, greenLetters, greyLetters);
                coloredLetters.splice(i, 1); 
                coloredLetters.splice(i, 0, letter);
            }
        }
    }
}