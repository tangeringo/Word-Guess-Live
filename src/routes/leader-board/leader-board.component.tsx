import LeaderBoardOverview from '../../components/leader-board/leader-board-overview.component';

import { LeaderBoardContainer } from './leader-board.styles';

const LeaderBoardPage = () => {
    return (
        <LeaderBoardContainer>
            <LeaderBoardOverview />
        </LeaderBoardContainer>
    );
}

export default LeaderBoardPage;