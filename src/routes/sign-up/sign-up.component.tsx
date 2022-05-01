import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from 'react-redux';

import { AuthErrorCodes, AuthError } from "firebase/auth";

import { signUpStart } from '../../redux/user/user.actions';

import InputField from "../../components/input-field/input-field.component";
import Button from "../../components/button/button.component";

import { Sign_Up_Container, Describtion } from './sign-up.styles';
import { H1 } from "../sign-in/sign-in.styles";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    };
    
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch()
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (password !== confirmPassword) 
            return alert('passwords do not match');
    
        try {
            dispatch(signUpStart(email, password, displayName))
            resetFormFields();

        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
    };
    
    return (
        <Sign_Up_Container>
            <H1>Sign UP</H1>
            <Describtion>Don't have an account?</Describtion>
            <form onSubmit={handleSubmit}>
                <InputField
                    label='Display Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />
        
                <InputField
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
        
                <InputField
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
        
                <InputField
                    label='Confirm Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                />
                <Button type='submit'>Sign Up</Button>
            </form>
        </Sign_Up_Container>
    );
};
    
    export default SignUpForm;