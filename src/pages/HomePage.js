import React from 'react';
import LatestInventory from '../components/LatestInventory';
import SearchForm from '../components/SearchForm';
import WhyChooseUs from '../components/WhyChooseUs';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import GetStarted from '../components/GetStarted';

// This is the corrected import path
import scrl from "../assets/n2dcz8j81bv7x8ep3v4xkp8qfuxl.jpeg";

const Hero = ({ setView }) => {
  return (
    <section className="hero">
        <div className="container hero-container">
        <div className="hero-content">
            <h1>Easy And Fast Way To <span className="highlight">Rent Your Car</span></h1>
            <p>We offer a wide range of rental cars to suit your needs. Whether you're planning a weekend getaway, a business trip.</p>
            <button className="btn btn-primary" onClick={() => setView('rent')}>Rent Car</button>
        </div>
        <div className="hero-image">
            <img src={scrl} alt="White Car" />
        </div>
        </div>
    </section>
  );
};

const HomePage = ({ setView, setSelectedCar }) => {
  return (
    <>
        <Hero setView={setView} />
        <SearchForm />
        <LatestInventory setView={setView} setSelectedCar={setSelectedCar} />
        <WhyChooseUs />
        <Achievements />
        <Testimonials />
        <GetStarted />
    </>
  );
};

export default HomePage;