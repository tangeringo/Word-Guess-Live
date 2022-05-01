import { createSelector } from 'reselect';
import { RootState } from '../store';

import { LeaderBoardState } from './leader-board.reducer';


const setLeaderBoard = (state: RootState): LeaderBoardState => state.leaderBoard;


export const selectLeaderBoard = createSelector(
    [setLeaderBoard],
    (leaderBoardSlice) => leaderBoardSlice.leaderBoard
);


export const selectIsLoading = createSelector(
    [setLeaderBoard],
    (leaderBoardSlice) => leaderBoardSlice.isLoading
);