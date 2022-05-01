import SignUpForm from '../sign-up/sign-up.component';
import SignInForm from '../sign-in/sign-in.component';

import { Auth_Container } from './authentication.styles';

const Authentication = () => {
    return (
        <Auth_Container>
            <SignInForm />
            <SignUpForm />
        </Auth_Container>
    );
}

export default Authentication;