import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/alumni/AlumniPage.module.css';

const menuMap = {
  'alumni-status': 'alumni-status',
  'alumni-group': 'alumni-group',
  'alumni-events': 'alumni-events',
  'alumni-etc': 'alumni-etc',
};

const AlumniPage = () => {
  const [active, setActive] = useState('alumni-events');
  const navigate = useNavigate();

  const handleClick = (key) => {
    setActive(key);
    navigate(`/alumni/${menuMap[key]}`);
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className={styles.sectionBanner}>
        <h2 className={styles.sectionTitle}>회원 동정</h2>
        <p className={styles.sectionSubtitle}>우리 동창들의 소식과 활동을 전합니다</p>
      </div>

      <div className={styles.alumniPage}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarNav}>
            <button onClick={() => handleClick('alumni-status')} className={active === 'alumni-status' ? styles.active : ''}>회원 현황</button>
            <button onClick={() => handleClick('alumni-group')} className={active === 'alumni-group' ? styles.active : ''}>동기회</button>
            <button onClick={() => handleClick('alumni-events')} className={active === 'alumni-events' ? styles.active : ''}>주요 행사</button>
            <button onClick={() => handleClick('alumni-etc')} className={active === 'alumni-etc' ? styles.active : ''}>기타(동호회 / 애경사)</button>
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

export default AlumniPage;