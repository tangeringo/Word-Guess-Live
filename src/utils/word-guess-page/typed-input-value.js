export const returnTypedWord = (genWord, inputValue) => {
    const emptyStringsLen = genWord.length - inputValue.length;
    
    const emptyStrings = [];
    for (let i = 0; i < emptyStringsLen; i++) {
        emptyStrings.push('');
    }

    const typedWord = [];
    for (let i = 0; i < inputValue.length; i++) {
        typedWord.push(inputValue[i]);
    }

    const result = typedWord.concat(emptyStrings);
    return result;
}