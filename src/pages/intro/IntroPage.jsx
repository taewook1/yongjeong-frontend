import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
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

const menuLabel = {
  greeting: '인사말',
  history: '연혁',
  rules: '회칙',
  presidents: '역대 회장단',
  organization: '조직도',
  location: '찾아오시는 길',
};

const IntroPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/')[2]; // ex) 'past-presidents'

  const handleClick = (key) => {
    navigate(`/intro/${menuMap[key]}`);
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
            {Object.keys(menuMap).map((key) => (
              <button
                key={key}
                onClick={() => handleClick(key)}
                className={currentPath === menuMap[key] ? styles.active : ''}
              >
                {menuLabel[key]}
              </button>
            ))}
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