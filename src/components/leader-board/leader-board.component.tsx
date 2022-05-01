import { FC } from 'react';

import { 
    LeaderBoardContainer, 
    Element, 
    Attempt, 
    ComponentItems 
} from './leader-board.styles';


export type UserData = {
    rank: number;
    userObj: {
        nickName: string;
        attempt: number;
        minutes: number;
        seconds: number;
    }
}

const LeaderBoardComponent: FC<UserData> = ({ userObj, rank }) => {
    const { nickName, attempt, minutes, seconds } = userObj
    return(
        <LeaderBoardContainer>
            <ComponentItems rank={rank}>
                <Element>
                    {'(' + rank + ')'}
                </Element>
                <Element>
                    {nickName}
                </Element>
                <Attempt>
                    {attempt? attempt : 'yet zero'}
                </Attempt>
                <Element>
                    {seconds? minutes + 'm ' + seconds + 's' : 'yet zero'}
                </Element>
            </ComponentItems>
        </LeaderBoardContainer>
    );
}

export default LeaderBoardComponent;