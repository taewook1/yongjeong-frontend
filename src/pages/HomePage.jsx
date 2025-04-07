import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Notice from '../components/Notice';
import AlumniNews from '../components/AlumniNews';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
       <Header />
       <Navbar />
      <section className="notice-preview">
        <div className="section-header">
          <h3>공지사항</h3>
          <button onClick={() => navigate('/notices')}>전체 보기</button>
        </div>
        <Notice />
      </section>
      <section className="alumni-preview">
        <div className="section-header">
          <h3>동문 동정</h3>
          <button onClick={() => navigate('/alumni-news')}>전체 보기</button>
        </div>
        <AlumniNews />
      </section>
    </div>
  );
};

export default HomePage;