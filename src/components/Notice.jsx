import React, { useEffect, useState } from 'react';
import '../styles/Notice.css';

const Notice = ({ showAll = false }) => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch('/api/notices') // 백엔드 API 주소에 맞게 수정
      .then((res) => res.json())
      .then((data) => {
        if (showAll) {
          setNotices(data);
        } else {
          setNotices(data.slice(0, 4)); // 최신 4개만
        }
      });
  }, [showAll]);

  return (
    <div className="notice-container">
      {notices.map((notice) => (
        <div key={notice.id} className="notice-item">
          <h4>{notice.title}</h4>
          <p>{notice.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Notice;