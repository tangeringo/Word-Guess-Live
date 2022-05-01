import { LeaderBoard } from "./leader-board.types";

import {
    fetchLeaderBoardDataStart,
    fetchLeaderBoardDataFailed,
    fetchLeaderBoardDataSuccess,
} from './leader-board.actions';


import { AnyAction } from 'redux';

export type LeaderBoardState = {
    readonly leaderBoard: LeaderBoard[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: LeaderBoardState = {
    leaderBoard: [],
    isLoading: false,
    error: null
}

export const leaderBoardWordReducer = (
    state = INITIAL_STATE, action = {} as AnyAction
): LeaderBoardState => {

    if (fetchLeaderBoardDataStart.match(action)) {
        return { ...state, isLoading: true }
    }

    if (fetchLeaderBoardDataSuccess.match(action)) {
        return { ...state, isLoading: false, leaderBoard: action.payload }
    }

    if (fetchLeaderBoardDataFailed.match(action)) {
        return { ...state, isLoading: false, error: action.payload }
    }

    return state;
}