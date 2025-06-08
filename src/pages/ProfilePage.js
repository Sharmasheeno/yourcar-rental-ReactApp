import React, { useState } from 'react';

const ProfilePage = () => {
    const [profileData, setProfileData] = useState({
        name: 'Alex Morgan',
        phone: '+1 234 567 890'
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({...prev, [name]: value}));
         if(submitted) setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    
    return (
        <div className="dashboard-content">
             <h3>My Profile</h3>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="profileName">Full Name</label>
                        <input type="text" id="profileName" name="name" value={profileData.name} onChange={handleChange} />
                    </div>
                     <div className="form-group">
                        <label htmlFor="profileEmail">Email Address</label>
                        <input type="email" id="profileEmail" defaultValue="alex.morgan@example.com" disabled />
                    </div>
                     <div className="form-group">
                        <label htmlFor="profilePhone">Phone Number</label>
                        <input type="text" id="profilePhone" name="phone" value={profileData.phone} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update Profile</button>
                     {submitted && (
                        <div className="form-success-message" style={{marginTop: '20px'}}>
                            <p>Profile updated successfully!</p>
                        </div>
                    )}
                </form>
        </div>
    );
};

export default ProfilePage;