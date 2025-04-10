import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axiosInstance';
import '../styles/NoticePreview.css';

const NoticePreview = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios.get('/notices/latest')
      .then((res) => setNotices(res.data))
      .catch((err) => console.error('공지사항 불러오기 실패:', err));
  }, []);

  return (
    <div className="notice-preview-container">
      <div className="notice-preview-header">
        <h2 className="preview-title">공지사항</h2>
        <Link to="/community/notice" className="notice-preview-more">
          더보기 <span className="preview-arrow">›</span>
        </Link>
      </div>
      <ul className="notice-preview-list">
        {notices.map((notice) => (
          <li key={notice.id} className="notice-preview-item">
            <a href={`/notices/${notice.id}`} className="notice-preview-title">
              {notice.title}
            </a>
            <span className="notice-preview-date">
              {new Date(notice.created_at).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticePreview;