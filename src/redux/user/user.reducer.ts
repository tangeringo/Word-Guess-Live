import { USER_TYPES } from "./user.types";

import { 
    signInSuccess,
    signOutSuccess,
    signInFailed,
    signUpFailed, 
    signOutFailed,

} from "./user.actions";

import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";


export type UserState = {
    readonly currentUser: UserData | null;
    isLoading: boolean;
    error: Error | null;
}

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const userReducer = (
    state = INITIAL_STATE, action = {} as AnyAction
) => {

    if (signInSuccess.match(action)) {
        return { ...state, currentUser: action.payload }
    }

    if (
        signInFailed.match(action) ||
        signUpFailed.match(action) ||
        signOutFailed.match(action)
    ) {
        return { ...state, error: action.payload }   
    }

    if (signOutSuccess.match(action)) {
        return { ...state, currentUser: null }
    }

    return state;
}


// later update to online users