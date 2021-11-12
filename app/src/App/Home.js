import React from "react";

import useAuth0 from "../auth/useAuth0";

import Dashboard from "./Dashboard";
import "./App.css";
const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {/* <header className={styles.header}>
        <h1>{process.env.REACT_APP_TITLE}</h1>
        <p>{process.env.REACT_APP_SUBTITLE}</p>
      </header> */}
      {/* isLoading removed b/c it was messing with Heroku */}
      {!isAuthenticated ? (
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

export default Home;
