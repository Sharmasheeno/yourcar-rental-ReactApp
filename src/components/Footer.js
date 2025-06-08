import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-container">
                <div className="footer-about footer-column">
                    <div className="logo">YOURCAR</div>
                    <p>We offer a wide range of rental cars to suit all your needs.</p>
                </div>
                <div className="footer-column">
                    <h4>About</h4>
                    <ul className="footer-links">
                        <li><a href="#about-us">About Us</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#news">News & Blog</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Company</h4>
                    <ul className="footer-links">
                        <li><a href="#how-we-work">How We Work?</a></li>
                        <li><a href="#capital">Capital</a></li>
                        <li><a href="#security">Security</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Support</h4>
                    <ul className="footer-links">
                        <li><a href="#faq">FAQs</a></li>
                        <li><a href="#support-center">Support Center</a></li>
                        <li><a href="#contact-us">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 YOURCAR. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;