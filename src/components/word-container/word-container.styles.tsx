import styled from 'styled-components';

export const LetterBoxContainer = styled.div`
    background: linear-gradient(to top, #7882A4, #D1D1D1, #7882A4, #D1D1D1, #7882A4);
    margin: 40px auto 0;
    width: 750px;
    height: 325px;
    border: 4px double #293462;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const NotFinishedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-itmems: center;
`;

export const NotFinishedString = styled.h3`
    position: absolute;
    top: 300px;
    color: #091353;
    border: 5px double #6A1051;
`;