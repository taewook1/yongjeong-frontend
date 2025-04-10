import React, { useState, useEffect } from 'react';
// import '../styles/AlumniNewsPage.css';

const AlumniNewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // 임시 테스트 데이터
    const testNews = [
      { id: 1, title: '동창 체육대회 성황리 종료', created_at: '2025-03-28' },
      { id: 2, title: '홍길동 동문, 장학금 1천만 원 기부', created_at: '2025-03-20' },
      { id: 3, title: '2025년도 신입 회원 환영회 개최', created_at: '2025-03-10' },
    ];
    setNews(testNews);
  }, []);

  return (
    <div className="alumni-page-container">
      <h2 className="alumni-title">동창 동정</h2>
      <ul className="alumni-list">
        {news.map((item) => (
          <li key={item.id} className="alumni-item">
            <a href={`/alumni-news/${item.id}`} className="alumni-link">{item.title}</a>
            <span className="alumni-date">{item.created_at}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumniNewsPage;