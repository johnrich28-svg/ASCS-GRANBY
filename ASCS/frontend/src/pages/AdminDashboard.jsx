import React from "react";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-circle"></div>
            <div className="logo-text">GCST - Dashboard</div>
          </div>
          <div className="user-profile">
            <div className="user-image"></div>
            <div className="user-name">Fullente, John Rich G.</div>
            <input
              type="text"
              placeholder="Search..."
              className="user-search"
            />
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>Dashboard</li>
            <li>Schedules</li>
            <li>Curriculum</li>
            <li>Events</li>
          </ul>
        </nav>
      </aside>
      <main className="admin-content">
        <h1>Welcome, Admin</h1>
        <p>Manage users, view reports, and update settings here.</p>
        <div className="admin-widgets">
          <div className="widget">Total Users: 120</div>
          <div className="widget">Pending Reports: 5</div>
          <div className="widget">System Status: Online</div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
