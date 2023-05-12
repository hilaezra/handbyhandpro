import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css';

import ProfileNavBar from './ProfileNavBar';

 const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                  to="#"
                  onClick={() => handleTabClick('profile')}
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`}
                  to="#"
                  onClick={() => handleTabClick('settings')}
                >
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeTab === 'notifications' ? 'active' : ''}`}
                  to="#"
                  onClick={() => handleTabClick('notifications')}
                >
                  Notifications
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">{activeTab === 'profile' ? 'Profile' : activeTab === 'settings' ? 'Settings' : 'Notifications'}</h1>
          </div>
          {activeTab === 'profile' && (
            <div>
              <h2>Profile information</h2>
              {/* display user profile information */}
            </div>
          )}
          {activeTab === 'settings' && (
            <div>
              <h2>Settings</h2>
              {/* display user settings */}
            </div>
          )}
          {activeTab === 'notifications' && (
            <div>
              <h2>Notifications</h2>
              {/* display user notifications */}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;
