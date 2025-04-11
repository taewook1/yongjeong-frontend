import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/foundation/ScholarshipPage.module.css';

const menuMap = {
  intro: 'intro',
  program: 'program'
};

const menuLabel = {
  intro: '재단 소개',
  program: '장학 사업',
};

const ScholarshipPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/')[2];

  const handleClick = (key) => {
    navigate(`/foundation/${menuMap[key]}`);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.banner}>
        <h2 className={styles.bannerTitle}>장학재단</h2>
        <p className={styles.bannerSubtitle}>지속 가능한 나눔과 성장</p>
      </div>
      <div className={styles.foundationPage}>
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
        <div className={styles.content}><Outlet /></div>
      </div>
      <Footer />
    </>
  );
};

export default ScholarshipPage;