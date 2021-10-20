// this is the new apiClient
import * as React from "react";

import useAuth0 from "./useAuth0";

const makeApi = (accessToken) => {
  const actions = {
    getTasks: () => _get("/api/tasks"),
    // getAffirmations: () => _get("/api/affirmations"),
    addTask: (name) => _post("/api/tasks", { name }),
    // you should specify a server header to have a bearer token
    deleteTask: (id) => _delete(`/api/tasks/${id}`, { id }),
    addAffirmations: (name) => _post("/api/affirmations"),
    addOrUpdateUser: (user) => _post("/api/users", { user }),
  };

  const _get = async (url) => (await _fetch(url)).json();

  const _post = async (url, body) => {
    const response = await _fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    let result;
    try {
      result = await response.json();
    } catch {}
    return result;
  };

  const _delete = (url) => _fetch(url, { method: "DELETE" });
  // this is where it's accessing
  // internal API feature
  // _fetch is a wrapper func that adds some custom functionality to fetch
  const _fetch = (url, options) => {
    console.log("inside fetch", options);
    return fetch(url, {
      ...options,
      headers: {
        ...(options?.headers ?? {}),
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  return actions;
};

const useApi = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    apiClient: undefined,
  });

  React.useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const accessToken = await getAccessTokenSilently();
          setState({
            loading: false,
            error: null,
            apiClient: makeApi(accessToken),
          });
        } catch (error) {
          setState({ loading: false, error, apiClient: undefined });
        }
      })();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return state;
};

export default useApi;
