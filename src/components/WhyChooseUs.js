import React from 'react';
import { SupportIcon, LicenseIcon, ConversationIcon } from '../icons/Icons';

const WhyChooseUs = () => {
    const features = [
        { icon: <SupportIcon />, title: "24-Hour Support", description: "We provide 24/7 customer support to assist you anytime." },
        { icon: <LicenseIcon />, title: "Verified License", description: "All our vehicles come with a verified and valid license." },
        { icon: <ConversationIcon />, title: "Free Conversation", description: "Enjoy a free and friendly conversation with our team." }
    ];

    return (
        <section className="section why-choose-us">
            <div className="container">
                <div className="why-choose-us-container">
                    <div className="why-choose-us-content">
                       <div className="section-header" style={{textAlign: 'left', maxWidth: '450px', margin: 0, marginBottom: '30px'}}>
                            <h2>Why Choose Us</h2>
                            <p>We offer the best experience with our deals</p>
                        </div>
                       {features.map((feature, index) => (
                           <div className="feature-item" key={index}>
                               <div className="feature-icon">{feature.icon}</div>
                               <div className="feature-text">
                                   <h4>{feature.title}</h4>
                                   <p>{feature.description}</p>
                               </div>
                           </div>
                       ))}
                    </div>
                    <div className="why-choose-us-image">
                        {/* This image link has been updated */}
<img src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Car rental agent handing over keys" />                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;