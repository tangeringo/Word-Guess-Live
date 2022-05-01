import { getLettersCountNumber } from './gen-utils';


export const setGeneratedWordObjArray = (generatedWord) => {
    const generatedLettersObjects = [];
  
    generatedWord.forEach(letter => {
      let count = getLettersCountNumber(generatedWord, letter);
  
      const letterObj = {
        key: letter,
        count: count, 
      }
  
      if (generatedLettersObjects.some(item => item.key === letterObj.key)) return
      return generatedLettersObjects.push(letterObj);
    });
    
    return generatedLettersObjects  
}


export const oneGenObj = (genObjects, keyLetter) => {
  return genObjects.find(obj => obj.key === keyLetter);
}