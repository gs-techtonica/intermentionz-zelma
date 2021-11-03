import React from "react";

import Tasks from "../Tasks";
import useAuth0 from "../auth/useAuth0";

import API from "./API";

const Dashboard = (addTask) => {
  const { user } = useAuth0();
  // console.log(user); // checking the user object
  return (
    <div className="dashboard-wrapper">
      <Tasks />
      <API {...{ addTask }} />
    </div>
  );
};

export default Dashboard;
