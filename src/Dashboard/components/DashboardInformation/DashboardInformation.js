import React from "react";

import "./DashboardInformation.css";

const DashboardInformation = ({ username }) => {
  return (
    <div className="dashboard_info_text_container">
      <span className="dashboard_info_text_title">Welcome {username}</span>
      <span className="dashboard_info_text_description">
        Start your online session
      </span>
    </div>
  );
};

export default DashboardInformation;
