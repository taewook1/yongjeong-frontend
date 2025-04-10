import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/foundation/ScholarshipPage.module.css';

const menuMap = {
  intro: 'intro',
  program: 'program'
};

const ScholarshipPage = () => {
  const [active, setActive] = useState('intro');
  const navigate = useNavigate();

  const handleClick = (menuKey) => {
    setActive(menuKey);
    navigate(`/foundation/${menuMap[menuKey]}`);
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
            <button className={active === 'intro' ? styles.active : ''} onClick={() => handleClick('intro')}>재단 소개</button>
            <button className={active === 'program' ? styles.active : ''} onClick={() => handleClick('program')}>장학 사업</button>
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

export default ScholarshipPage;