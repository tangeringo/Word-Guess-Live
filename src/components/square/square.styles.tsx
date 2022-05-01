import styled, { css, keyframes } from 'styled-components';

const rotateSquare = keyframes`
  from {transform: rotateY(0deg);}
  to {transform: rotateY(180deg);}
`;

export type Delay = {
    delay: number
}

const redSquareStyles = css<Delay>`
    background-color: #BE3030;
    transition-property: background-color;
    transition-timing-function: linear;
    transition-duration: 0.7s;
    transition-delay: ${({ delay }) => `${delay + 0.4}s`};
    border: 2px solid #7D0000;
`;

const greenSquareStyles = css<Delay>`
    background-color: #228B22;
    transition-property: background-color;
    transition-timing-function: linear;
    transition-duration: 0.7s;
    transition-delay: ${({ delay }) => `${delay + 0.4}s`};
    border: 2px solid #064420;
`;

const greySquareStyles = css<Delay>`
    background-color: #798777;
    transition-property: background-color;
    transition-timing-function: linear;
    transition-duration: 0.7s;
    transition-delay: ${({ delay }) => `${delay + 0.4}s`};
    border: 2px solid #456268;
`;

export type BGColor = {
    color: string;
}

const getAnimationStyles = ({ color }: BGColor) => {
    if (color === 'redSq') {
        return redSquareStyles;
    } else if (color === 'greenSq') {
        return greenSquareStyles;
    } else if (color === 'greySq') {
        return greySquareStyles;
    }
}

export type AnimatedProps = Delay & BGColor;

const animatedSquareStyles = css<AnimatedProps>`
    transform: rotateY(0deg);
    background-color: #C2B092;
    animation: ${rotateSquare} 1s linear;
    animation-delay: ${({ delay }) => `${delay}s`};
    border: 2px solid #191919;

    ${getAnimationStyles}
`;

export type Modification = {
    modification: string;
}

const getSquareStyles = ({modification} : Modification ) => {
    if (modification === 'animated') {
        return animatedSquareStyles;
    }
}

export type SquareBaseStyles = AnimatedProps & Modification;

export const SquareBaseStyles = styled.div<SquareBaseStyles>`
    background-color: #C2B092;
    border: 2px solid #632626;
    width: 50px;
    height: 50px;
    margin: 10px;

    ${getSquareStyles}
`;

export const CurrentLetter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    font-size: 2rem;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;
