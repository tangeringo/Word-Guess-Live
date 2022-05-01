import styled, { css } from 'styled-components';

const subColor = '#3A3845';
const mainColor = 'black';


const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

type FormInputLabelStyles = {
  shrink?: boolean;
}

export const Form_Input_Label = styled.label<FormInputLabelStyles>`
    color: ${subColor}; 
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    font-weight: bold;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
    background: linear-gradient(to bottom, #7267CB, #EAE7C6, #7267CB);
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 280px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;

    &:focus {
        outline: none;
    }

    &:focus ~ ${Form_Input_Label} {
        ${shrinkLabelStyles};
    }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0; 

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;