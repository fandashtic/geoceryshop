import React from 'react';
import Auth from 'config/auth';
import { Route, Redirect } from "react-router-dom";
const userRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
          <Component {...props} />
      ) : (
          <Redirect
            to='/'
          />
        )
    }
  />
);

export default userRouter