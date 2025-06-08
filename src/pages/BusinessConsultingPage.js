import React, { useState } from 'react';

const BusinessConsultingPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="page-container">
            <div className="container">
                <div className="section-header">
                    <h2>Business Consulting</h2>
                    <p>Leverage our expertise to boost your car rental business.</p>
                </div>
                <p>We provide tailored consulting services for individuals and companies looking to enter or optimize their performance in the car rental industry. Our services include market analysis, fleet management strategies, pricing optimization, and technology integration.</p>
                
                {submitted ? (
                    <div className="form-success-message">
                        <h3>Thank you!</h3>
                        <p>Your request has been submitted. We will get back to you shortly.</p>
                    </div>
                ) : (
                    <form className="auth-form" style={{maxWidth: '600px', margin: '50px auto 0 auto'}} onSubmit={handleSubmit}>
                        <h3>Request a Consultation</h3>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
                        </div>
                         <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                        </div>
                         <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Request</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default BusinessConsultingPage;