import styled from 'styled-components';


export const GuessInputStyles = styled.input`
    background: linear-gradient(to top, #7882A4, #D1D1D1, #7882A4);
    display: flex;
    align-items: center;
    margin: 20px auto;
    font-size: 1.5rem;
    width: 280px;
    letter-spacing: 2px;
    text-shadow: 1.5px 1.5px 4px black;

    ::placeholder {
        color: black;
    }
`;