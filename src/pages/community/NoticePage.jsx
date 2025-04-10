import React, { useState, useEffect } from 'react';
import axios from '../../api/axiosInstance';
import '../../styles/community/NoticePage.css';

const NoticePage = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios.get('/notices')
      .then((res) => {
        setNotices(res.data);
      })
      .catch((err) => {
        console.error('공지사항 불러오기 실패:', err);
      });
  }, []);

  return (
    <div className="notice-page-container">
      <div className="notice-header">
        <h2 className="notice-title">공지사항</h2>
        <p className="notice-count">총 {notices.length}건의 게시글이 있습니다.</p>
      </div>
      <ul className="notice-list">
        {notices.map((notice, index) => (
          <li key={notice.id} className="notice-row">
            <div className="notice-left">
              <span className="notice-number">{notices.length - index}</span>
              <a href={`/notices/${notice.id}`} className="notice-title-link">
                {notice.title}
              </a>
            </div>
            <div className="notice-date">
              {new Date(notice.created_at).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticePage;
