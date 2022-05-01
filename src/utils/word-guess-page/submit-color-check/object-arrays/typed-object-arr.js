import { returnTypedLetterObject } from './typed-utils';


export const setTypedWordObjArray = (typedWord) => {
  const typedLettersObjects = [];
  const utilArray = [];

  typedWord.forEach(letter => {
    const letterObj = returnTypedLetterObject(typedLettersObjects, utilArray, letter)

    return typedLettersObjects.push(letterObj);
  });

  return typedLettersObjects;
}


export const oneTypedObj = (typedObjects, idx) => {
  return typedObjects[idx];
}