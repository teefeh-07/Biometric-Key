import React from "react";
import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Your Identity Dashboard</h2>
      <div className="dashboard-grid">
        <div className="card stat-card">
          <h3>Status</h3>
          <p className="active">Active</p>
        </div>
        <div className="card action-card">
          <h3>Actions</h3>
          <button>Update Biometrics</button>
        </div>
      </div>
    </div>
  );
};
