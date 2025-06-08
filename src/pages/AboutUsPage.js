import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="page-container" style={{paddingTop: '40px', paddingBottom: '40px'}}>
             <div className="container">
                <div className="section-header">
                    <h2>About Us</h2>
                    <p>Your trusted partner in mobility.</p>
                </div>
                <p style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>Founded in 2020, YOURCAR was created with a simple mission: to make car rentals easy, affordable, and accessible for everyone. We believe that renting a car should be a seamless experience, from booking to drop-off. Our commitment to customer satisfaction and a diverse, modern fleet has made us a leading choice for travelers and locals alike.</p>
                
                <div className="section" style={{paddingTop: '60px', paddingBottom: 0}}>
                    <div className="section-header">
                        <h3>Our Team</h3>
                    </div>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="https://placehold.co/150x150/FFC300/FFFFFF?text=A" alt="Team member" />
                            <h4>Ahmed Yusuf</h4>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="team-member">
                            <img src="https://placehold.co/150x150/3D9970/FFFFFF?text=F" alt="Team member" />
                            <h4>Fatima Ali</h4>
                            <p>Head of Operations</p>
                        </div>
                        <div className="team-member">
                            <img src="https://placehold.co/150x150/007bff/FFFFFF?text=H" alt="Team member" />
                            <h4>Hassan Omar</h4>
                            <p>Chief Technology Officer</p>
                        </div>
                         <div className="team-member">
                            <img src="https://placehold.co/150x150/F012BE/FFFFFF?text=M" alt="Team member" />
                            <h4>Maryan Hussein</h4>
                            <p>Marketing Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;