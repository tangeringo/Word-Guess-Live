import { COLORED_WORD_TYPES, ColoredWord } from "./colored.w.types";
import { createAction, withMatcher, ActionWithPayload } from "../../utils/action/create-action";

export type setColoredWordRedux = 
    ActionWithPayload<
        COLORED_WORD_TYPES.SET_COLORED_WORD, 
        ColoredWord[]
    >

export const setColoredWordRedux = withMatcher(
    (colorWord: ColoredWord[]): setColoredWordRedux =>
        createAction(
            COLORED_WORD_TYPES.SET_COLORED_WORD, colorWord
        )
    );