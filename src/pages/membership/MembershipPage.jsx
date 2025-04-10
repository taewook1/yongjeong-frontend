import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/membership/MembershipPage.module.css';

const menuMap = {
  guide: 'guide',
  usage: 'usage',
  status: 'status',
  fund: 'fund',
  service: 'service'
};

const MembershipPage = () => {
  const [active, setActive] = useState('guide');
  const navigate = useNavigate();

  const handleClick = (menuKey) => {
    setActive(menuKey);
    navigate(`/membership/${menuMap[menuKey]}`);
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
            <button className={active === 'guide' ? styles.active : ''} onClick={() => handleClick('guide')}>회비 안내</button>
            <button className={active === 'usage' ? styles.active : ''} onClick={() => handleClick('usage')}>회비 사용내역</button>
            <button className={active === 'status' ? styles.active : ''} onClick={() => handleClick('status')}>회비 납부현황</button>
            <button className={active === 'fund' ? styles.active : ''} onClick={() => handleClick('fund')}>발전기금</button>
            <button className={active === 'service' ? styles.active : ''} onClick={() => handleClick('service')}>서비스</button>
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

export default MembershipPage;