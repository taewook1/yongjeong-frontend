// src/pages/record/RecordPage.jsx
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/record/RecordPage.module.css';

const menuMap = {
  'annual-meeting': 'annual-meeting',
  'newsletter': 'newsletter',
  'sports-day': 'sports-day',
  'memorial-hall': 'memorial-hall',
  'resources': 'resources',
};

const RecordPage = () => {
  const [active, setActive] = useState('annual-meeting');
  const navigate = useNavigate();

  const handleClick = (menuKey) => {
    setActive(menuKey);
    navigate(`/record/${menuMap[menuKey]}`);
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className={styles.sectionBanner}>
        <h2 className={styles.sectionTitle}>용정 기록관</h2>
        <p className={styles.sectionSubtitle}>우리의 추억과 역사를 담은 공간</p>
      </div>

      <div className={styles.recordPage}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarNav}>
            <button
              className={active === 'annual-meeting' ? styles.active : ''}
              onClick={() => handleClick('annual-meeting')}
            >
              정기 총회
            </button>
            <button
              className={active === 'newsletter' ? styles.active : ''}
              onClick={() => handleClick('newsletter')}
            >
              동창 회보
            </button>
            <button
              className={active === 'sports-day' ? styles.active : ''}
              onClick={() => handleClick('sports-day')}
            >
              동창 체육대회
            </button>
            <button
              className={active === 'memorial-hall' ? styles.active : ''}
              onClick={() => handleClick('memorial-hall')}
            >
              용정 기념관
            </button>
            <button
              className={active === 'resources' ? styles.active : ''}
              onClick={() => handleClick('resources')}
            >
              자료실
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RecordPage;