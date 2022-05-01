import { AnyAction } from 'redux';

import { GenWord } from "./generated.w.types";

import { 
    fetchGenWordFailed, 
    fetchGenWordStart, 
    fetchGenWordSuccess, 
} from "./generated.w.actions";

export type GenWordState = {
    readonly generated: GenWord[]
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: GenWordState = {
    generated: [],
    isLoading: false,
    error: null
}

export const generatedWordReducer = (
    state = INITIAL_STATE, action = {} as AnyAction
): GenWordState => {

    if (fetchGenWordStart.match(action)) {
        return { ...state, isLoading: true }
    }

    if (fetchGenWordSuccess.match(action)) {
        return { ...state, isLoading: false, generated: action.payload }
    }

    if (fetchGenWordFailed.match(action)) {
        return { ...state, isLoading: false, error: action.payload }
    }

    return state;
}