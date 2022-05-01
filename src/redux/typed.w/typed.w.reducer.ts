import { TypedWord } from "./typed.w.types";

import { AnyAction } from 'redux';

import { setTypedWordRedux } from './typed.w.actions';


export type TypedWordState = {
    typedWord: TypedWord[];
}

const INITIAL_STATE: TypedWordState = {
    typedWord: []
}

export const typedWordReducer = (
    state = INITIAL_STATE, action: AnyAction
): TypedWordState => {

    if (setTypedWordRedux.match(action)) {
        return { ...state, typedWord: action.payload }
    }
    return state;
}