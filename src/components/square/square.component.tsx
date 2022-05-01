import { FC } from 'react';

import { SquareBaseStyles, CurrentLetter } from './square.styles';

export type SquareLetter = {
    modification: string;
    letter: string;
    delay: number;
    color: string;
}

const Square: FC<SquareLetter> = ({ letter, ...props }) => {
    return (
        <SquareBaseStyles {...props}>
            <CurrentLetter> {letter} </CurrentLetter>
        </SquareBaseStyles>
    );
}

export default Square