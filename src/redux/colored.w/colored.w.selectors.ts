import { createSelector } from 'reselect';

import { ColoredWordState } from './colored.w.reducer';

import { RootState } from '../store';

const coloredWord = (state: RootState): ColoredWordState => state.colored;

export const selectColoredWord = createSelector(
    [coloredWord],
    (coloredWordSlice) => coloredWordSlice.colored
)