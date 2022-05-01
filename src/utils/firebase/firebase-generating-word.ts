import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase.utils';

export const generateANumber = () => {
  const maxNum = 100;
  const number = Math.floor(Math.random() * maxNum) + 1;
  const stringNum = number.toString();

  return stringNum;
}


export const connectWordAndNumber = () => {
  const stringNum = generateANumber();
  const chosenWord = 'word' + stringNum;

  return chosenWord;
}

export const returnGeneratedWordUtilsFunc = async() => {
  const word = connectWordAndNumber();

  const wordRef = doc(db, 'word-collection', word);
  const wordSnapShot = await getDoc(wordRef);
  if (wordSnapShot.exists()) {
    const { value } = wordSnapShot.data();
    const genWord = value.split('');
    return genWord;
  }
}