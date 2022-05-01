export const getTypedLetterCount = (array, letter) => {
    let count = 1;

    array.forEach(item => {
      if (item.key === letter) return count += 1;
    });
  
    return count;  
}


export const returnTypedLetterObject = (array, utilArray, letter) => {
    let count = 0;
    const repeatedCount = getTypedLetterCount(array, letter)
  
    const letterObj = {
      key: null,
      count: null
    }
  
    if (!utilArray.includes(letter)) {
      utilArray.push(letter);
      letterObj.key = letter;
      letterObj.count = count += 1;
  
    } else {
      letterObj.key = letter
      letterObj.count = repeatedCount
    }
  
    return letterObj;  
}