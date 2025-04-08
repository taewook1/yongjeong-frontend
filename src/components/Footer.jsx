import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />
      
      <div className={styles.policyLinks}>
        <a href="/privacy">개인정보처리방침</a>
        <span>|</span>
        <a href="/terms">이용약관</a>
        <span>|</span>
        <a href="/copyright">저작권 보호정책</a>
        <span>|</span>
        <a href="/camera-policy">영상정보처리기기 운영방침</a>
      </div>

      <div className={styles.bottomLine} />

      <div className={styles.info}>
        <p>© 2025 용정중학교 총동창회. All rights reserved.</p>
        <p>주소: 서울특별시 ○○구 ○○로 123   |   연락처: 02-123-4567</p>
      </div>
    </footer>
  );
};

export default Footer;