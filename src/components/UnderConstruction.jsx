import React from 'react';
import styles from '../styles/UnderConstruction.module.css';

const UnderConstruction = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>현재 페이지는 작업 중입니다.<br />빠른 시일 내에 준비하겠습니다.</p>
    </div>
  );
};

export default UnderConstruction;