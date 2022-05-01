import { AnyAction } from "redux";
import { ColoredWord } from "./colored.w.types";

import { setColoredWordRedux } from './colored.w.actions';

export type ColoredWordState = {
    readonly colored: ColoredWord[]
}

const INITIAL_STATE: ColoredWordState = {
    colored: []
}

export const coloredWordReducer = (
    state = INITIAL_STATE, 
    action: AnyAction
): ColoredWordState => {

    if (setColoredWordRedux.match(action)) {
        return { ...state, colored: action.payload }
    }
    
    return state;
}