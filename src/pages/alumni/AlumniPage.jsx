import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
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

const menuLabel = {
  'alumni-status': '회원 현황',
  'alumni-group': '동기회',
  'alumni-events': '주요 행사',
  'alumni-etc': '기타(동호회 / 애경사)',
};

const AlumniPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/')[2];

  const handleClick = (key) => {
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

export default AlumniPage;