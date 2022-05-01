import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LeaderBoardComponent from './leader-board.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';

import { fetchLeaderBoardDataStart } from '../../redux/leader-board/leader-board.actions';
import { selectIsLoading, selectLeaderBoard } from '../../redux/leader-board/leader-board.selectors';

import { 
    LeaderBoardContainer, 
    LeaderBoardElements,
    LeaderBoardPageItems, 
    Title, 
    Headder, 
    ItemsDescribtion 
} from './leader-board-overview.styles';

import { LeaderBoardUser } from '../../redux/leader-board/leader-board.types';


const LeaderBoardOverview = () => {

    const userArrSaga = useSelector(selectLeaderBoard);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLeaderBoardDataStart())
    }, []);

    return (
        <LeaderBoardContainer>
            <LeaderBoardElements>
                <Title> LeaderBoard </Title>
                <ItemsDescribtion>
                    <Headder> | Rank | </Headder>
                    <Headder> | Nick | </Headder>
                    <Headder> | Attempt | </Headder>
                    <Headder> | Time | </Headder>
                </ItemsDescribtion>
                <LeaderBoardPageItems>
                    {isLoading? 
                        <LoadingSpinner />
                        :userArrSaga.map((userObj, index) => {
                            return <LeaderBoardComponent key={index} rank={index + 1} userObj={userObj as unknown as LeaderBoardUser}/>
                        })
                    }
                </LeaderBoardPageItems>
            </LeaderBoardElements>
        </LeaderBoardContainer>
    );
}

export default LeaderBoardOverview;