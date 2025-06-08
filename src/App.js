import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RentCarPage from './pages/RentCarPage';
import CarDetailsPage from './pages/CarDetailsPage';
import BusinessConsultingPage from './pages/BusinessConsultingPage';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import DashboardContainer from './pages/DashboardContainer';

function App() {
  const [view, setView] = useState('home');
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderView = () => {
      switch(view) {
          case 'login':
            return <LoginPage setView={setView} setIsLoggedIn={setIsLoggedIn} />;
          case 'signup':
            return <SignupPage setView={setView} />;
          case 'rent':
            return <RentCarPage setView={setView} setSelectedCar={setSelectedCar} />;
          case 'carDetails':
            return <CarDetailsPage car={selectedCar} setView={setView} />;
          case 'consulting':
            return <BusinessConsultingPage />;
          case 'about':
            return <AboutUsPage />;
          case 'blog':
            return <BlogPage setView={setView} setSelectedPost={setSelectedPost} />;
           case 'blogPost':
            return <BlogPostPage post={selectedPost} setView={setView} />;
           case 'dashboard':
            return <DashboardContainer isLoggedIn={isLoggedIn} setView={setView} />;
          case 'home':
          default:
            return <HomePage setView={setView} setSelectedCar={setSelectedCar} />;
      }
  }

  return (
    <div className="app-container">
      <Header view={view} setView={setView} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;