import styled, { css } from "styled-components";


export const LeaderBoardContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const firstComponent = css`
    background: linear-gradient(to top, #B05E27, #FFCE45, #B05E27);
`;

const secondComponent = css`
    background: linear-gradient(to top, #798777, #FAF1E6, #798777);
`;

const thirdComponent = css`
    background: linear-gradient(to top, #630A10, #EBA83A, #630A10);
`;

export type Rank = {
    rank: number;
}

const getComponentStyles = ({ rank }: Rank) => {
    if (rank === 1) {
        return firstComponent;
    } else if (rank === 2) {
        return secondComponent;
    } else if (rank === 3) {
        return thirdComponent;
    }
}

export const ComponentItems = styled.div`
    display: flex;
    justify-content: space-around;
    background: linear-gradient(to top, #206A5D, #BDD2B6, #206A5D);
    width: 70%;
    border: 2px solid black;
    margin: 10px;

    ${getComponentStyles}
`;


export const Element = styled.h4`
    display: flex;
    color: #293462;
    font-size: 1.1rem;
    margin: 20px auto 20px;
`;

export const Attempt = styled.h4`
    display: flex;
    color: #293462;
    font-size: 1.1rem;
    margin: 20px auto 20px 40px;
`;
