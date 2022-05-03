import styled from "styled-components";

export const AttemptCountContainer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: linear-gradient(to bottom, #7882A4, #A1CAE2, #7882A4);
    color: #3E497A;
    padding: 15px;
    font-size: 1rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    outline: 2px solid #7267CB;
    outline-offset: 2px;

    @media screen and (max-width: 900px) {
        position: static;
        display: flex;
        width: 80px;
        height: 15px;
        padding: 15px;
        margin: 25px auto 10px;
    }

`;