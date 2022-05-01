import { takeLatest, all, call, put } from 'typed-redux-saga/macro';

import { USER_TYPES } from './user.types';

import { 
    signInSuccess,
    signInFailed,
    signUpSuccess,
    signUpFailed,
    signOutFailed,
    signOutSuccess,
    EmailSignInStart,
    SignUpStart,
    SignUpSuccess
} from './user.actions';

import { 
    getCurrentUser,
    createUserDocumentFromAuth,
    createAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    signOutUser,
    AdditionalInformation
} from '../../utils/firebase/firebase.utils';

import { User } from 'firebase/auth';


export function* getSnapShotFromUserAuth(userAuth: User, additionalInfo?: AdditionalInformation) {
    try {
        const userSnapshot = yield* call(
            createUserDocumentFromAuth, 
            userAuth, additionalInfo
        );

        if (userSnapshot) {
            yield* put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
        }

    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield* call(signInWithGooglePopup);
        yield* call(getSnapShotFromUserAuth, user);
    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}

export function* signInWithEmail({payload: { email, password}}: EmailSignInStart) {
    try {
        const userCredential = yield* call(signInAuthUserWithEmailAndPassword, email, password)

        if (userCredential) {
            const { user } = userCredential;
            yield* call(getSnapShotFromUserAuth, user);
        }

    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}

export function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
    try {
        const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password);

        if (userCredential) {
            const { user } = userCredential;
            yield* put(signUpSuccess(user, { displayName }))
        }
        
    } catch(error) {
        yield* put(signUpFailed(error as Error))
    }
}

export function* signInAfterSignUp({ payload: { user, additionalInfo } }: SignUpSuccess) {
    yield* call(getSnapShotFromUserAuth, user, additionalInfo);
}

export function* signOut() {
    try {
        yield* call(signOutUser);
        yield* put(signOutSuccess());
    } catch(error) {
        yield* put(signOutFailed(error as Error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield* call(getCurrentUser);
        if (!userAuth) return
        yield* call(getSnapShotFromUserAuth, userAuth);
    } catch (error) {
        yield* put(signInFailed(error as Error))
    }
}


// calling gen functions
export function* onGoogleSignInStart() {
    yield* takeLatest(USER_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield* takeLatest(USER_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
    yield* takeLatest(USER_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield* takeLatest(USER_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
    yield* takeLatest(USER_TYPES.SIGN_OUT_START, signOut);
}

export function* onCheckUserSession() {
    yield* takeLatest(USER_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

// users saga
export function* userSagas() {
    yield* all([
        call(onCheckUserSession), 
        call(onGoogleSignInStart), 
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
    ]);
}