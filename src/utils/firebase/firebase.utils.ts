import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  QueryDocumentSnapshot
} from 'firebase/firestore';

import { getCurrentFullDate } from '../what-date/what-day';

const config = {
    apiKey: "AIzaSyDGn_lkYOU4DrhYNrKwgtTMt5BQThSx854",
    authDomain: "word-guess-db.firebaseapp.com",
    projectId: "word-guess-db",
    storageBucket: "word-guess-db.appspot.com",
    messagingSenderId: "83949406422",
    appId: "1:83949406422:web:412147fde6011b2a78a177",
    measurementId: "G-DC5Q7T86PX"
  };

  initializeApp(config);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });

export const auth = getAuth();
export const db = getFirestore();


// exporting data to firebase

export type ObjectToAdd = {
  title: string
}

export const addCollectionAndDocuments = async<T extends ObjectToAdd> (
  collectionKey: string,
  objectsToAdd: T[],
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

// Sign In Functionality
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInAuthUserWithEmailAndPassword = async(email: string, password: string) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
}

// Sign Up Functionality

export type AdditionalInformation = {
  displayName?: string
}

export type UserData = {
  displayName: string;
  createdAt: Date;
  email: string;
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {

  if (!userAuth) return;

  if (userAuth.email) {
    const userDocRef = doc(db, 'users', userAuth.email);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      const day = 0;
      const month = 0;
      const minutes = 0;
      const seconds = 0;
      const attempt = 0;
      const wordAlreadyGuessed = false;
  
      // all propriate data
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          day,
          month,
          minutes,
          seconds, 
          attempt,
          wordAlreadyGuessed,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error);
      }
    }
  
    return userSnapshot as QueryDocumentSnapshot<UserData>;
  }  
};

export const createAuthUserWithEmailAndPassword = async (
  email: string, password: string
) => {

  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};


// Signing Out
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);


export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth)
      },
      reject
    );
  });
}