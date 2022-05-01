import { USER_TYPES } from "./user.types";

import { User } from 'firebase/auth';

import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/action/create-action";

import { UserData, AdditionalInformation } from "../../utils/firebase/firebase.utils";



export type CheckUserSession = Action<USER_TYPES.CHECK_USER_SESSION>

export const checkUserSession = withMatcher(
    (): CheckUserSession => createAction(
        USER_TYPES.CHECK_USER_SESSION
    )
);



export type SetCurrentUser = ActionWithPayload<USER_TYPES.SET_CURRENT_USER, UserData>

export const setCurrentUser = withMatcher(
    (user: UserData): SetCurrentUser => createAction(
        USER_TYPES.SET_CURRENT_USER, user
    )
);



export type GoogleSignInStart = Action <USER_TYPES.GOOGLE_SIGN_IN_START>

export const googleSignInStart = withMatcher(
    (): GoogleSignInStart => createAction(
        USER_TYPES.GOOGLE_SIGN_IN_START
    )
);



export type EmailSignInStart = ActionWithPayload<USER_TYPES.EMAIL_SIGN_IN_START, {email: string, password: string}>

export const emailSignInStart = withMatcher(
    (email: string, password: string): EmailSignInStart => createAction(
        USER_TYPES.EMAIL_SIGN_IN_START, {email, password}
    )
);


export type SignInSuccess = ActionWithPayload<USER_TYPES.SIGN_IN_SUCCESS, UserData>

export const signInSuccess = withMatcher(
    (user: UserData & {id: string}): SignInSuccess => createAction(
        USER_TYPES.SIGN_IN_SUCCESS, user
    )
);

export type SignInFailed = ActionWithPayload<USER_TYPES.SIGN_IN_FAILED, Error>

export const signInFailed = withMatcher(
    (error: Error): SignInFailed => createAction(
        USER_TYPES.SIGN_IN_FAILED, error
    )
);



export type SignUpStart = ActionWithPayload<USER_TYPES.SIGN_UP_START, {email: string, password: string, displayName: string}>

export const signUpStart = withMatcher(
    (email: string, password: string, displayName: string): SignUpStart => createAction(
        USER_TYPES.SIGN_UP_START, {email, password, displayName}
    )
);

export type SignUpSuccess = ActionWithPayload<USER_TYPES.SIGN_UP_SUCCESS, {user: User, additionalInfo: AdditionalInformation}>

export const signUpSuccess = withMatcher(
    (user: User, additionalInfo: AdditionalInformation): SignUpSuccess => createAction(
        USER_TYPES.SIGN_UP_SUCCESS, { user, additionalInfo}
        )
);



export type SignUpFailed = ActionWithPayload<USER_TYPES.SIGN_UP_FAILED, Error>

export const signUpFailed = withMatcher(
    (error: Error): SignUpFailed => createAction(
        USER_TYPES.SIGN_UP_FAILED, error
    )
);



export type SignOutStart = Action<USER_TYPES.SIGN_OUT_START>

export const signOutStart = withMatcher(
    () :SignOutStart => createAction(
        USER_TYPES.SIGN_OUT_START
    )
);



export type SignOutSuccess = Action<USER_TYPES.SIGN_OUT_SUCCESS>

export const signOutSuccess = withMatcher(
    (): SignOutSuccess => createAction(
        USER_TYPES.SIGN_OUT_SUCCESS
    )
);



export type SignOutFailed = ActionWithPayload<USER_TYPES.SIGN_OUT_FAILED, Error>

export const signOutFailed = withMatcher(
    (error: Error): SignOutFailed => createAction(
        USER_TYPES.SIGN_OUT_FAILED, error
    )
);
