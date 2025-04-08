import React, { useEffect, useState } from 'react';
import '../styles/NoticePreview.css';

const NoticePreview = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/notices/latest')
      .then(res => res.json())
      .then(data => setNotices(data))
      .catch(err => console.error('공지사항 불러오기 실패:', err));
  }, []);

  return (
    <div className="notice-preview-container">
      <div className="notice-preview-header">
        <h2>공지사항</h2>
        <a href="/notices" className="notice-more">
          더보기 <span className="arrow">›</span>
        </a>
      </div>
      <ul className="notice-list">
        {notices.map((notice) => (
          <li key={notice.id} className="notice-item">
            <a href={`/notices/${notice.id}`} className="notice-title">{notice.title}</a>
            <span className="notice-date">
              {new Date(notice.created_at).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticePreview;