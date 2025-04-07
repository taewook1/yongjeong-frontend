// src/components/AlumniNews.jsx
import React, { useEffect, useState } from 'react';
import '../styles/AlumniNews.css';

const AlumniNews = ({ showAll = false }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch('/api/alumni-news') // 백엔드에 맞게 경로 수정 필요
      .then((res) => res.json())
      .then((data) => {
        if (showAll) {
          setNewsList(data);
        } else {
          setNewsList(data.slice(0, 4));
        }
      });
  }, [showAll]);

  return (
    <div className="alumni-news-container">
      {newsList.map((news) => (
        <div key={news.id} className="alumni-news-item">
          <h4>{news.title}</h4>
          <p>{news.date}</p>
        </div>
      ))}
    </div>
  );
};

export default AlumniNews;