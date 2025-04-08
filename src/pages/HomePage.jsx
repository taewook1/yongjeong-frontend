import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import NoticePreview from '../components/NoticePreview';
import AlumniNewsPreview from '../components/AlumniNewsPreview';
import MembershipFeeGuide from '../components/MembershipFeeGuide';
import Footer from '../components/Footer';

import '../styles/HomePage.css';

const HomePage = () => {


  return (
    <div className="homepage">
      <Header />
      <Navbar />
      <Banner />
      <div className="preview-section">
        <NoticePreview />
        <AlumniNewsPreview />
      </div>
      <MembershipFeeGuide />
      <Footer />
    </div>
  );
};

export default HomePage;