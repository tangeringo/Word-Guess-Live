import { countSameArrSymbols } from '../green-color-check';

import { oneGenObj } from '../object-arrays/gen-object-arr';
import { oneTypedObj } from '../object-arrays/typed-object-arr';

import { returnRedLetter, returnGreyLetter } from '../square-colors/square-colors';

let genLetterObjsArr = [];
let typedLetterObjsArr = [];

export const returnGenLetterObjArr = (generatedObjects) => {
    genLetterObjsArr = generatedObjects;
}

export const returnTypedLetterObjArr = (typedObjects) => {
    typedLetterObjsArr = typedObjects;
}


export const defineRedOrGreyBg = (
    currentLetter, idx, delay, greenLetters, greyLetters
) => {

    let letter = null;
    
    if (typedLetterObjsArr.some(item => item.key === currentLetter)) {                    
        const currentGenObj = oneGenObj(genLetterObjsArr, currentLetter);
        const currentTyedObj = oneTypedObj(typedLetterObjsArr, idx);
        const greenLetterAmount = countSameArrSymbols(greenLetters, currentLetter);
        const greyLetterAmount = countSameArrSymbols(greyLetters, currentLetter);

        if (currentGenObj === undefined) {
            return
        }
        
        const genCount = currentGenObj.count;
        const typedCount = currentTyedObj.count;


        if (typedLetterObjsArr.some(obj => obj.key === '')) return
        if (typedCount <= genCount) {
            if (genCount > greenLetterAmount) {
                if (genCount > greyLetterAmount) {
                    letter = returnGreyLetter(currentLetter, delay);
                    greyLetters.push(letter)
                } else return letter = returnRedLetter(currentLetter, delay);
            } else return letter = returnRedLetter(currentLetter, delay);
        } else return letter = returnRedLetter(currentLetter, delay);
    }

    return letter;
}