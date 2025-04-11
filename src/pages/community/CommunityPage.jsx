import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/community/CommunityPage.css';

const menuMap = {
  notice: 'notice',
  plans: 'plans',
  freeboard: 'freeboard',
};

const menuLabel = {
  notice: '공지사항',
  plans: '사업계획 및 활동',
  freeboard: '자유게시판',
};

const CommunityPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/')[2];

  const handleClick = (key) => {
    navigate(`/community/${menuMap[key]}`);
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
            {Object.keys(menuMap).map((key) => (
              <button
                key={key}
                onClick={() => handleClick(key)}
                className={currentPath === menuMap[key] ? 'active' : ''}
              >
                {menuLabel[key]}
              </button>
            ))}
          </div>
        </div>
        <div className="content"><Outlet /></div>
      </div>
      <Footer />
    </>
  );
};

export default CommunityPage;