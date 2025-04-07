import React from 'react';
import AlumniNews from '../components/AlumniNews';
import '../styles/AlumniNews.css';

const AlumniNewsPage = () => {
  return (
    <div className="alumni-news-page">
      <h2 className="alumni-news-title">동문 동정</h2>
      <AlumniNews showAll={true} />
    </div>
  );
};

export default AlumniNewsPage;