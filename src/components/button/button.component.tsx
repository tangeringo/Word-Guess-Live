import { FC, ButtonHTMLAttributes } from 'react';

import { 
    Base_Button_Styles, 
    Google_Btn_Styles
} from './button.styles';

export enum BUTTON_TYPE_CLASS {
    base = 'base-sign-in',
    google = 'google-sign-in',
}

const getButtonStyles = (buttonType = BUTTON_TYPE_CLASS.base): typeof Base_Button_Styles => 
    ({
        [BUTTON_TYPE_CLASS.base]: Base_Button_Styles,
        [BUTTON_TYPE_CLASS.google]: Google_Btn_Styles,
    }[buttonType]);

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASS;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButtonStyles(buttonType);
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    );
};

export default Button;