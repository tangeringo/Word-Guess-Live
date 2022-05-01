import { FC, InputHTMLAttributes } from 'react';

import { Form_Input_Label, Input, Group } from './input-field.styles';

export type InputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

const InputField: FC<InputProps> = ({ label, ...otherProps }) => {
    return(
        <Group>
        <Input {...otherProps} />
            {label && (
            <Form_Input_Label shrink={
                    Boolean(otherProps.value && 
                    typeof otherProps.value === 'string' && 
                    otherProps.value.length)
                }>
                {label}
            </Form_Input_Label>
            )}
    </Group>
    );
}

export default InputField;