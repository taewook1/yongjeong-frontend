import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/membership/MembershipPage.module.css';

const menuMap = {
  guide: 'guide',
  usage: 'fee-usage',
  status: 'fee-status',
  fund: 'fund',
  service: 'service'
};

const menuLabel = {
  guide: '회비 안내',
  usage: '회비 사용내역',
  status: '회비 납부현황',
  fund: '발전기금',
  service: '서비스',
};

const MembershipPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/')[2];

  const handleClick = (key) => {
    navigate(`/membership/${menuMap[key]}`);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.sectionBanner}>
        <h2 className={styles.sectionTitle}>회비 / 기부 / 혜택</h2>
        <p className={styles.sectionSubtitle}>동문과 함께하는 나눔의 실천</p>
      </div>
      <div className={styles.membershipPage}>
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

export default MembershipPage;