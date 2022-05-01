import { all, call } from 'typed-redux-saga/macro';

import { genWordSaga } from './generated.w/generated-w.saga';
import { userSagas } from './user/user.saga';
import { LeaderBoardSaga } from './leader-board/leader-board.saga';

export function* rootSaga() {
    yield* all([
        call(genWordSaga), 
        call(userSagas),
        call(LeaderBoardSaga),
    ]);
}
