import styled from 'styled-components';


export const Base_Button_Styles = styled.button`
    background: linear-gradient(to bottom, #7267CB, #EAE7C6, #7267CB);
    width: auto;
    height: 50px;
    padding: 15px 15px;
    font-size: 15px;
    color: black;
    text-shadow: 1px 1px 4px black;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    margin: 20px auto 10px;
    border-radius: 15px;

    &:hover {
        background: linear-gradient(to right, #7267CB, #EAE7C6, #7267CB);
        color: #3A3845;
        text-shadow: 1px 1px 4px #3A3845;
    }
`;

export const Google_Btn_Styles = styled(Base_Button_Styles)`
    background: linear-gradient(to top, #94B3FD, #94DAFF, #94B3FD);
    margin-left: 15px;

    &:hover {
        background: linear-gradient(to right, #94B3FD, #94DAFF, #94B3FD);
        color: #3A3845;
        text-shadow: 1px 1px 4px #3A3845;
    }
`;