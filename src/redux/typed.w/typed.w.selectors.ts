import { createSelector } from 'reselect';

import { RootState } from '../store';

import { TypedWordState } from './typed.w.reducer';

const typedWord = (state: RootState): TypedWordState => state.typed;

export const selectTypedWord = createSelector(
    [typedWord],
    (typedWordSlice) => typedWordSlice.typedWord
);