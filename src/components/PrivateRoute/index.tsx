import * as React from 'react';
import {
    Route,
    Redirect,
    RouteProps,
} from 'react-router-dom';

import Header from '../Header'

import { isAuth } from '../../services/auth'

interface PrivateRouteProps extends RouteProps {
    component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                isAuth() ? (
                    <>
                        <Header />
                        <Component {...routeProps} />
                    </>
                ) : (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: routeProps.location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;