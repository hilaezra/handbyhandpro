import React from 'react'
import { Link } from 'react-router-dom';


const ProfileNavBar = () => {

    const [activeTab, setActiveTab] = useState('profile');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                            to="#"
                            onClick={() => handleTabClick('profile')} >
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
    );
}

export default ProfileNavBar;
