import { 
    GENERATED_WORD_TYPES, 
    GenWord 
} from './generated.w.types';

import { 
    Action, 
    ActionWithPayload, 
    createAction,
    withMatcher
} from '../../utils/action/create-action';


export type FetchGenWordStart = Action<GENERATED_WORD_TYPES.FETCH_GENERATED_WORD_START>

export type fetchGenWordSuccess = 
    ActionWithPayload<
    GENERATED_WORD_TYPES.FETCH_GENERATED_WORD_SUCCESS, 
    GenWord[]
>

export type fetchGenWordFailed = 
    ActionWithPayload<
    GENERATED_WORD_TYPES.FETCH_GENERATED_WORD_FAILED, 
    Error
>


export const fetchGenWordStart = withMatcher((): FetchGenWordStart => 
    createAction(GENERATED_WORD_TYPES.FETCH_GENERATED_WORD_START));


export const fetchGenWordSuccess = withMatcher((generated: GenWord[]): fetchGenWordSuccess => 
    createAction(GENERATED_WORD_TYPES.FETCH_GENERATED_WORD_SUCCESS, generated));


export const fetchGenWordFailed = withMatcher((error: Error): fetchGenWordFailed => 
    createAction(GENERATED_WORD_TYPES.FETCH_GENERATED_WORD_FAILED, error));