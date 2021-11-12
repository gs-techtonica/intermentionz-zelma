import React from "react";

import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

const AuthProvider = (props) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };
  // tried setting it to true so it would always work
  // https://community.auth0.com/t/silent-authentication-returning-200-with-isauthenticated-false/54732
  const useRefreshTokens = true;
  const cacheLocation = "localstorage";

  return (
    <Auth0Provider
      redirectUri={window.location.origin}
      {...{
        domain,
        clientId,
        audience,
        onRedirectCallback,
        useRefreshTokens,
        cacheLocation,
        ...props,
      }}
    />
  );
};

export default AuthProvider;
