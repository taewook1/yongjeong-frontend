// src/pages/NoticePage.jsx
import React from 'react';
import Notice from '../components/Notice';
import '../styles/Notice.css';

const NoticePage = () => {
  return (
    <div className="notice-page">
      <h2 className="notice-title">공지사항</h2>
      <Notice showAll={true} />
    </div>
  );
};

export default NoticePage;