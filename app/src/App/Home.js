import React from "react";

import Tasks from "../Tasks";
// import useAuth0 from "../auth/useAuth0";
import useAuth0 from "../auth/useAuth0";

import API from "./API";

// import Dashboard from "./Dashboard";
import "./App.css";
const Home = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  // console.log("is authenticated: " + isAuthenticated);

  const authentication = (isAuthenticated) => {
    isAuthenticated = true;
  };

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
  // const { user } = useAuth0();
  // console.log(user); // checking the user object
  return (
    <div className="dashboard-wrapper">
      <Tasks />
      <API {...{ addTask }} />
    </div>
  );
};

export default Home;
