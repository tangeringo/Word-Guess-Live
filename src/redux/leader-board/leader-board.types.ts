export enum LEADER_BOARD_TYPES {
    FETCH_LEADER_BOARD_DATA_START = 'l-board/FETCH_LEADER_BOARD_DATA_START',
    FETCH_LEADER_BOARD_DATA_SUCCESS = 'l-board/FETCH_LEADER_BOARD_DATA_SUCCESS',
    FETCH_LEADER_BOARD_DATA_FAILED = 'l-board/FETCH_LEADER_BOARD_DATA_FAILED',
}

export type LeaderBoardUser = {
    id: string;
    email: string;
    nickName: string;

    attempt: number;
    minutes: number;
    seconds: number;
    wordAlreadyGuessed: boolean;

    day: number;
    month: number;
}

export type LeaderBoard = {
    users: LeaderBoardUser[];
}