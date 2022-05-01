import { takeLatest, call, all, put } from 'typed-redux-saga/macro';
import { createAUserArr } from '../../utils/firebase/firebase-users-arr';
import {
    fetchLeaderBoardDataFailed,
    fetchLeaderBoardDataSuccess
} from './leader-board.actions';

import { LEADER_BOARD_TYPES } from './leader-board.types';


export function* leaderBoardDataFlow() {
    try {
        const usersData = yield* call(createAUserArr);
        yield* put(fetchLeaderBoardDataSuccess(usersData))
    } catch (error) {
        yield* put(fetchLeaderBoardDataFailed(error as Error))
    }
}

export function* onLeaderBoardStart() {
    yield* takeLatest(LEADER_BOARD_TYPES.FETCH_LEADER_BOARD_DATA_START, leaderBoardDataFlow)
}

export function* LeaderBoardSaga() {
    yield* all([call(onLeaderBoardStart)]);
}