import { createSelector } from 'reselect';
import { RootState } from '../store';

import { GenWordState } from './generated.w.reducer';

const generatedWord = (state: RootState): GenWordState => state.generated;

export const selectGeneratedWord = createSelector(
    [generatedWord],
    (generatedWordSlice) => generatedWordSlice.generated
);


export const selectIsLoading = createSelector(
    [generatedWord],
    (categoriesSlice) => categoriesSlice.isLoading
  );