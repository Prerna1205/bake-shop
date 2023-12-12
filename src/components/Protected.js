import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protected = ({ user, children, isAdmin, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      user ? (
        isAdmin ? (
          !user.role  ? (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          ) : (
            children
          )
        ) : (
          children
        )
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      )
    }
  />
);

export default Protected;
