import React from 'react';

const Header = ({ view, setView, isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('home');
  };

  return (
    <header className="header">
        <div className="container">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div className="logo" onClick={() => setView('home')}>YOURCAR</div>
            <nav className="nav-links">
                <a className={view === 'home' ? 'active' : ''} onClick={() => setView('home')}>Home</a>
                <a className={view === 'rent' ? 'active' : ''} onClick={() => setView('rent')}>Rent Car</a>
                <a className={view === 'consulting' ? 'active' : ''} onClick={() => setView('consulting')}>Business Consulting</a>
                <a className={view === 'about' ? 'active' : ''} onClick={() => setView('about')}>About us</a>
                <a className={view === 'blog' ? 'active' : ''} onClick={() => setView('blog')}>Blog</a>
            </nav>
            <div className="header-actions">
                {isLoggedIn ? (
                    <>
                        <button className="btn btn-secondary" onClick={() => setView('dashboard')}>Dashboard</button>
                        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <button className="btn btn-secondary" onClick={() => setView('login')}>Login</button>
                        <button className="btn btn-primary" onClick={() => setView('signup')}>Sign Up</button>
                    </>
                )}
            </div>
        </div>
        </div>
    </header>
  );
};

export default Header;