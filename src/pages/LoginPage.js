import React from 'react';

const LoginPage = ({ setView, setIsLoggedIn }) => {
  const handleLogin = (e) => {
      e.preventDefault();
      setIsLoggedIn(true);
      setView('dashboard');
  }
  return (
    <div className="page-container">
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="auth-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="auth-switch">
                Don't have an account? <span onClick={() => setView('signup')}>Sign Up</span>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;