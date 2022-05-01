import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/action/create-action";
import { LEADER_BOARD_TYPES, LeaderBoard } from "./leader-board.types";



export type FetchLeaderBoardDataStart = Action<LEADER_BOARD_TYPES.FETCH_LEADER_BOARD_DATA_START>

export const fetchLeaderBoardDataStart = withMatcher(
    (): FetchLeaderBoardDataStart =>
        createAction(LEADER_BOARD_TYPES.FETCH_LEADER_BOARD_DATA_START)
    )


export type FetchLeaderBoardDataSuccess = ActionWithPayload<LEADER_BOARD_TYPES.FETCH_LEADER_BOARD_DATA_SUCCESS, LeaderBoard[]>

export const fetchLeaderBoardDataSuccess = withMatcher(
    (leaderBoardArr: LeaderBoard[]): FetchLeaderBoardDataSuccess =>
        createAction(LEADER_BOARD_TYPES.FETCH_LEADER_BOARD_DATA_SUCCESS, leaderBoardArr)
    )


export type FetchLeaderBoardDataFailed = ActionWithPayload<LEADER_BOARD_TYPES.FETCH_LEADER_BOARD_DATA_FAILED, Error>

export const fetchLeaderBoardDataFailed = withMatcher(
    (error: Error): FetchLeaderBoardDataFailed =>
        createAction(LEADER_BOARD_TYPES.FETCH_LEADER_BOARD_DATA_FAILED, error)
    )