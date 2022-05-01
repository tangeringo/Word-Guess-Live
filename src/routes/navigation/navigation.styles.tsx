import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PageLinks = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const NavLink = styled(Link)`
    background: linear-gradient(to top, #7882A4, #D1D1D1, #7882A4);
    border: 4px double #293462;
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    text-decoration: none;
    color: black;
    cursor-pointer;
    font-weight: bold;

    &:hover {
        background: linear-gradient(to right, #7882A4, #D1D1D1, #7882A4);
    }
`;