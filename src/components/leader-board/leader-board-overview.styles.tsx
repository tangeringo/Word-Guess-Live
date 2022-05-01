import styled from "styled-components";

export const LeaderBoardContainer = styled.div`
    margin: 80px auto 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LeaderBoardElements = styled.div`
    background: linear-gradient(to top, #7882A4, #D1D1D1, #7882A4, #D1D1D1, #7882A4);
    outline: 7px double #7267CB;
    outline-offset: 4px;
    padding: 5px;
    width: 80%;
`;

export const ItemsDescribtion = styled.div`
    display: flex;
    margin: 10px auto 10px; 
    border: 5px double black;
    width: 70%;
`;


export const Title = styled.h2`
    display: flex;
    justify-content: center;
    margin: 20px;
    font-family: cursive;
    font-size: 2rem;
    color: #293462;
`;


export const Headder = styled.h4`
    display: flex;
    margin: 10px auto;
`;

export const LeaderBoardPageItems = styled.div`
    text-align: center;
`;