// Home Page
import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Nav from "../Nav";
import Tasks from "../Tasks";
import useApi from "../auth/useApi";
import useAuth0 from "../auth/useAuth0";
import { Protected } from "../auth/widgets";

import API from "./API";
import About from "./About";

import "./App.css";
// test comment

const App = () => {
  const { isAuthenticated, user } = useAuth0();
  const { loading, apiClient } = useApi();

  React.useEffect(() => {
    if (isAuthenticated && !loading) {
      apiClient.addOrUpdateUser(user);
    }
  }, [isAuthenticated, user, loading, apiClient]);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={<Protected component={Dashboard} />}
          />
          <Route path="/about" element={<Protected component={About} />} />
        </Routes>
      </main>
    </>
  );
};

const Home = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <>
      {/* <header className={styles.header}>
        <h1>{process.env.REACT_APP_TITLE}</h1>
        <p>{process.env.REACT_APP_SUBTITLE}</p>
      </header> */}
      {isLoading ? (
        <>
          <div>Loading ...</div>
        </>
      ) : !isAuthenticated ? (
        <div>
          <div className="hero-wrapper">
            <section className="text-wrapper">
              <h1 className="hero-text">Reinforce, Remind, Redirect</h1>
              <h4 className="hero-subtext">
                Use Cognitive Restructuring to Change the Way You Think.
              </h4>
              <h4 className="hero-subtext">
                {/* Never forget - <i>you are worthy</i>. */}
              </h4>
            </section>
          </div>
        </div>
      ) : (
        <div>
          <Dashboard />
        </div>
      )}
    </>
  );
};

const Dashboard = (addTask) => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div className="dashboard-wrapper">
      <Tasks />
      <API {...{ addTask }} />
    </div>
  );
};

export default App;
