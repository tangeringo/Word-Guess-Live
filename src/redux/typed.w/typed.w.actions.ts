import { TYPED_WORD_TYPES, TypedWord } from "./typed.w.types";
import { createAction, withMatcher, ActionWithPayload } from "../../utils/action/create-action";



export type SetTypedWordRedux = ActionWithPayload<
    TYPED_WORD_TYPES.SET_TYPED_WORD, TypedWord[]
>

export const setTypedWordRedux = withMatcher(
    (typeWord: TypedWord[]): SetTypedWordRedux => 
        createAction(
            TYPED_WORD_TYPES.SET_TYPED_WORD, typeWord
        )
    );