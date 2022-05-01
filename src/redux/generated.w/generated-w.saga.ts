import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { fetchGenWordSuccess, fetchGenWordFailed } from './generated.w.actions';

import { returnGeneratedWordUtilsFunc } from '../../utils/firebase/firebase-generating-word';

import { GENERATED_WORD_TYPES } from './generated.w.types';


export function* fetchGeneratedWordAsync() {
    try {
        const word = yield* call(returnGeneratedWordUtilsFunc);
        if (word) {
            yield* put(fetchGenWordSuccess(word));
        }
    } catch (error) {
        yield* put(fetchGenWordFailed(error as Error));
    } 
}

export function* onFetchGenWord() {
    yield* takeLatest(
        GENERATED_WORD_TYPES.FETCH_GENERATED_WORD_START, 
        fetchGeneratedWordAsync
    )
}

export function* genWordSaga() {
    yield* all([call(onFetchGenWord)])
}