import React, { useState } from 'react';
import '../styles/Navbar.css';

const menuItems = [
  {
    title: '총동창회 소개',
    submenu: [
      '인사말',
      '연혁',
      '회칙',
      '사업계획 및 활동',
      '역대 회장단',
      '조직도',
      '찾아오시는 길',
    ],
  },
  {
    title: '용정 기록관',
    submenu: ['정기 총회', '동창 회보', '동창 체육대회', '용정 기념관', '자료실'],
  },
  {
    title: '동창회비',
    submenu: ['회비 안내', '회비 납부현황', '회비 사용내역'],
  },
  {
    title: '장학기금',
    submenu: ['장학기금'],
  },
  {
    title: '커뮤니티',
    submenu: [
      '공지사항',
      '연도별 행사일정',
      '동호회 소식',
      '경조사',
      '갤러리',
      '자유게시판',
    ],
  },
  {
    title: '동창 동정',
    submenu: [
      '동창 회원 현황',
      '지역별 동문 보기',
      '은사님 동정',
      '동창 사업 및 기업체',
      '동창 홍보',
    ],
  },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav className="navbar">
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="menu-item"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <span className="menu-title">{item.title}</span>
            {item.submenu.length > 0 && activeIndex === index && (
              <ul className="submenu">
                {item.submenu.map((sub, i) => (
                  <li key={i} className="submenu-item">{sub}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;