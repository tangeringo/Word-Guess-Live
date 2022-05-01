import { useState, FormEvent, ChangeEvent} from "react";
import { useDispatch } from 'react-redux';

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import InputField from "../../components/input-field/input-field.component";
import Button, { BUTTON_TYPE_CLASS } from "../../components/button/button.component";

import { ReactComponent as GoogleLogo } from '../../svg/google-sign-in.svg';

import { Sign_Up_Container, H1, H3, Buttons_Container } from './sign-in.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
    resetFormFields();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

    return (
        <Sign_Up_Container>
            <H1>Sign IN</H1>
            <H3>Already have an account?</H3>
            <form onSubmit={handleSubmit}>
                <InputField type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={email} 
                    label="Email"
                    required
                />

                <InputField type="password" 
                    name="password" 
                    onChange={handleChange} 
                    value={password}
                    label="Password" 
                    required
                />
                <Buttons_Container>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASS.google} onClick={signInWithGoogle}>
                        <GoogleLogo style={{marginTop: '-15px', marginLeft: '-15px'}}/>
                        Google
                    </Button>
                </Buttons_Container>
            </form>
        </Sign_Up_Container>
    );
}

export default SignInForm;