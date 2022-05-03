import { COLORED_WORD_TYPES, ColoredWord } from "./colored.w.types";
import { createAction, withMatcher, ActionWithPayload } from "../../utils/action/create-action";

export type SetColoredWordRedux = 
    ActionWithPayload<
        COLORED_WORD_TYPES.SET_COLORED_WORD, 
        ColoredWord[]
    >

export const setColoredWordRedux = withMatcher(
    (colorWord: ColoredWord[]): SetColoredWordRedux =>
        createAction(
            COLORED_WORD_TYPES.SET_COLORED_WORD, colorWord
        )
    );