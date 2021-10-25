// Home Page
import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import CBT from "../1_components/images/CBT.jpeg";
import Nav from "../Nav";
import Tasks from "../Tasks";
import useApi from "../auth/useApi";
import useAuth0 from "../auth/useAuth0";
import { Protected } from "../auth/widgets";

import API from "./API";

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

const About = () => {
  return (
    <div className="about-wrapper">
      <AboutText />
    </div>
  );
};

const AboutText = () => {
  return (
    <div className="about-text-wrapper">
      <div className="about-text">
        <p className="about-p">
          InterMention is an application that's built on the Psychological
          concept of Cognitive Restructuring. Cognitive Restructuring is a
          technique that helps one <em>change</em> their internal thought
          patterns using Cues & Reminders. Thought patterns are the inner
          monologue that you and I both have, and depending on our past
          experiences in life, or even just our genetic makeup, these thought
          patterns can be warped and overly negative.
        </p>
        <br />
        <p className="about-p">
          Your outlook can effect how you feel, and that in turn can effect how
          you behave. This can be visualized using the Cognitive Behavioral
          Cycle:
        </p>
        <div className="about-img">
          <img src={CBT} alt="cognitive-behavioral-cycle"></img>
        </div>
        <p className="about-p">
          What if we could intervene and counteract negative thoughts with more
          positive, balanced thoughts? That's where InterMention comes into
          play. Make a table of custom reminders / mentions and view those
          mentions throughout the day to <em>reinforce</em> and
          <em>condition</em> ourselves until we believe them.
        </p>
        <br />
        <p className="about-p">
          Science says it works, so try it today! And don't forget, if you want
          to receive your favorite mention as a reminder via email, just click
          the checkbox next to that mention!
        </p>
      </div>
    </div>
  );
};
export default App;
