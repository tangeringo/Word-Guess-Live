import { Fragment } from 'react';

import { signOutStart } from '../../redux/user/user.actions';

import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { Outlet } from 'react-router-dom';

import { PageLinks, NavLink } from './navigation.styles'

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const signOutUser = () => dispatch(signOutStart())

    return (
        <Fragment>
            <PageLinks>
                {currentUser? (
                        <NavLink as="span" onClick={signOutUser}>
                            Sign OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/sign-in"> Sign IN </NavLink>
                    )
                }
                <NavLink to="/word-guess"> Word </NavLink>
                <NavLink to="/leader-board"> LeaderBoard </NavLink>
            </PageLinks>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;