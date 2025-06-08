import React, { useState, useEffect } from 'react';
import DashboardPage from './DashboardPage';
import ProfilePage from './ProfilePage';

const DashboardContainer = ({isLoggedIn, setView}) => {
    const [dashboardView, setDashboardView] = useState('dashboard'); // 'dashboard', 'profile'
    
    useEffect(() => {
        if(!isLoggedIn){
            // Redirect to login if not logged in.
            setView('login');
        }
    }, [isLoggedIn, setView]);

    if (!isLoggedIn) {
        return null; // or a loading spinner
    }

    return (
        <div className="page-container">
            <div className="container">
                 <div className="section-header">
                    <h2>My Dashboard</h2>
                </div>
                <div className="dashboard-layout">
                    <nav className="dashboard-nav">
                        <a href="#" className={dashboardView === 'dashboard' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setDashboardView('dashboard')}}>Dashboard</a>
                        <a href="#" className={dashboardView === 'profile' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setDashboardView('profile')}}>My Profile</a>
                    </nav>
                    <div className="dashboard-main">
                        {dashboardView === 'dashboard' ? <DashboardPage /> : <ProfilePage />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardContainer;