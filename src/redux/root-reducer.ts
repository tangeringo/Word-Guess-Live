import { combineReducers } from "redux";

import { generatedWordReducer } from "./generated.w/generated.w.reducer";
import { typedWordReducer } from "./typed.w/typed.w.reducer";
import { coloredWordReducer } from './colored.w/colored.w.reducer';
import { userReducer } from './user/user.reducer';
import { leaderBoardWordReducer } from './leader-board/leader-board.reducer';

export const rootReducer = combineReducers({
    generated: generatedWordReducer,
    typed: typedWordReducer,
    colored: coloredWordReducer,
    user: userReducer,
    leaderBoard: leaderBoardWordReducer,
});