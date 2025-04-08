import React from 'react';
import styles from '../styles/FooterSimple.module.css';

const FooterSimple = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="/terms">이용약관</a>
        <span>|</span>
        <a href="/privacy">개인정보처리방침</a>
      </div>
      <p className={styles.copy}>
        Copyright © 2025 Yongjeong Middle School Alumni Association. All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterSimple;