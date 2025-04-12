import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AlumniNewsPreview.css';
import axios from '../api/axiosInstance';

const AlumniNewsPreview = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/alumni-news/latest')
      .then((res) => setNews(res.data))
      .catch((err) => console.error('동창 동정 불러오기 실패:', err));
  }, []);

  return (
    <div className="alumni-preview-container">
      <div className="alumni-preview-header">
        <h2>동창 동정</h2>
        <Link to="/alumni/alumni-events" className="alumni-more">
          더보기 <span className="arrow">›</span>
        </Link>
      </div>
      <ul className="alumni-list">
        {Array.isArray(news) && news.map((item) => (
          <li key={item.id} className="alumni-item">
            <a href={`/alumni-news/${item.id}`} className="alumni-title">{item.title}</a>
            <span className="alumni-date">
              {new Date(item.created_at).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumniNewsPreview;