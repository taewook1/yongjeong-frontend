import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import styles from '../../styles/intro/IntroPage.module.css';

const menuMap = {
  greeting: 'greeting',
  history: 'history',
  rules: 'rules',
  presidents: 'past-presidents',
  organization: 'organization',
  location: 'location',
};

const IntroPage = () => {
  const [active, setActive] = useState('greeting');
  const navigate = useNavigate();

  const handleClick = (menuKey) => {
    setActive(menuKey);
    navigate(`/intro/${menuMap[menuKey]}`);
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className={styles.sectionBanner}>
        <h2 className={styles.sectionTitle}>총동창회 소개</h2>
        <p className={styles.sectionSubtitle}>용정의 뿌리, 전통을 이어갑니다</p>
      </div>

      <div className={styles.introPage}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarNav}>
            <button
              className={active === 'greeting' ? styles.active : ''}
              onClick={() => handleClick('greeting')}
            >
              인사말
            </button>
            <button
              className={active === 'history' ? styles.active : ''}
              onClick={() => handleClick('history')}
            >
              연혁
            </button>
            <button
              className={active === 'rules' ? styles.active : ''}
              onClick={() => handleClick('rules')}
            >
              회칙
            </button>
            <button
              className={active === 'presidents' ? styles.active : ''}
              onClick={() => handleClick('presidents')}
            >
              역대 회장단
            </button>
            <button
              className={active === 'organization' ? styles.active : ''}
              onClick={() => handleClick('organization')}
            >
              조직도
            </button>
            <button
              className={active === 'location' ? styles.active : ''}
              onClick={() => handleClick('location')}
            >
              찾아오시는 길
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

export default IntroPage;