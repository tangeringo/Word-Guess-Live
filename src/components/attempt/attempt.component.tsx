import { FC } from 'react';

import { AttemptCountContainer } from './attempt.styles';

type AttemptCount = {
    attempt: number
}

const Attempt: FC<AttemptCount> = ({ attempt }) => {
    return (
        <AttemptCountContainer>
            <span> Attempt: {attempt} </span>
        </AttemptCountContainer>
    );
}

export default Attempt;