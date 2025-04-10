import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import '../../styles/community/CommunityPage.css';

const menuMap = {
  notice: 'notice',
  plans: 'plans',
  freeboard: 'freeboard',
};

const CommunityPage = () => {
  const [active, setActive] = useState('notice');
  const navigate = useNavigate();

  const handleClick = (menuKey) => {
    setActive(menuKey);
    navigate(`/community/${menuMap[menuKey]}`);
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className="section-banner">
        <h2 className="section-title">커뮤니티</h2>
        <p className="section-subtitle">용정과 함께, 오늘을 잇다</p>
      </div>

      <div className="community-page">
      <div className="sidebar">
        <div className="sidebar-nav">
          <button
            className={active === 'notice' ? 'active' : ''}
            onClick={() => handleClick('notice')}
          >
            공지사항
          </button>
          <button
            className={active === 'plans' ? 'active' : ''}
            onClick={() => handleClick('plans')}
          >
            사업계획 및 활동
          </button>
          <button
            className={active === 'freeboard' ? 'active' : ''}
            onClick={() => handleClick('freeboard')}
          >
            자유게시판
          </button>
        </div>
      </div>

        <div className="content">
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CommunityPage;