import React, { useState } from 'react';

const SignupPage = ({ setView }) => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      if (error) setError('');
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match.');
          return;
      }
      // Handle successful signup
      console.log('User signed up:', formData);
      setView('login');
  };

  return (
    <div className="page-container">
        <div className="auth-form-container">
            <h2>Create an Account</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                 <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                 <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <div className="auth-switch">
                Already have an account? <span onClick={() => setView('login')}>Login</span>
            </div>
        </div>
    </div>
  );
};

export default SignupPage;