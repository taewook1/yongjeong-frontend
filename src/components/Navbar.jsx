import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const menuItems = [
  {
    title: '총동창회 소개',
    submenu: ['인사말', '연혁', '회칙', '역대 회장단', '조직도', '찾아오시는 길'],
  },
  {
    title: '용정 기록관',
    submenu: ['정기 총회', '동창 회보', '동창 체육대회', '용정 기념관', '자료실'],
  },
  {
    title: '회원 동정',
    submenu: ['회원 현황', '동기회', '주요 행사', '기타(동호회 / 애경사)'],
  },
  {
    title: '커뮤니티',
    submenu: ['공지사항', '사업계획 및 활동', '자유게시판'],
  },
  {
    title: '회비 / 기부 / 혜택',
    submenu: ['회비 안내', '회비 사용내역', '회비 납부현황', '발전기금', '서비스'],
  },
  {
    title: '장학재단',
    submenu: ['재단 소개', '장학 사업'],
  },
];

const submenuPathMap = {
  // 총동창회 소개
  '인사말': 'greeting',
  '연혁': 'history',
  '회칙': 'rules',
  '역대 회장단': 'past-presidents',
  '조직도': 'organization',
  '찾아오시는 길': 'location',

  // 용정 기록관
  '정기 총회': 'annual-meeting',
  '동창 회보': 'newsletter',
  '동창 체육대회': 'sports-day',
  '용정 기념관': 'memorial-hall',
  '자료실': 'resources',

  // 회원 동정
  '회원 현황': 'alumni-status',
  '동기회': 'alumni-group',
  '주요 행사': 'alumni-events',
  '기타(동호회 / 애경사)': 'alumni-etc',

  // 커뮤니티
  '공지사항': 'notice',
  '사업계획 및 활동': 'plans',
  '자유게시판': 'freeboard',

  // 회비 / 기부 / 혜택
  '회비 안내': 'fee-guide',
  '회비 사용내역': 'fee-usage',
  '회비 납부현황': 'fee-status',
  '발전기금': 'fund',
  '서비스': 'service',

  // 장학재단
  '재단 소개': 'foundation',
  '장학 사업': 'scholarship',
};

const submenuPrefixMap = {
  '총동창회 소개': 'intro',
  '용정 기록관': 'archive',
  '회원 동정': 'alumni',
  '커뮤니티': 'community',
  '회비 / 기부 / 혜택': 'support',
  '장학재단': 'foundation',
};

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav className="navbar">
      <ul className="menu">
        {menuItems.map((item, index) => {
          const prefix = submenuPrefixMap[item.title]; 
          return (
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
                    <li key={i} className="submenu-item">
                      <Link to={`/${prefix}/${submenuPathMap[sub] || sub}`}>
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;