import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/record/RecordPage.module.css';

const menuMap = {
  meeting: 'annual-meeting',
  newsletter: 'newsletter',
  sports: 'sports-day',
  memorial: 'memorial-hall',
  resources: 'resources',
};

const menuLabel = {
  meeting: '정기 총회',
  newsletter: '동창 회보',
  sports: '동창 체육대회',
  memorial: '용정 기념관',
  resources: '자료실',
};

const RecordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/')[2];

  const handleClick = (key) => {
    navigate(`/archive/${menuMap[key]}`);
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

export default RecordPage;