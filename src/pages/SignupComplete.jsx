import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SignupComplete.module.css';
import FooterSimple from '../components/FooterSimple';
import { FaCheckCircle } from 'react-icons/fa';

const SignupComplete = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <FaCheckCircle className={styles.icon} />
          <h1 className={styles.title}>회원가입이 완료되었습니다!</h1>
          <p className={styles.subtitle}>
            용정 동창 여러분을 위한 공간에 오신 것을 환영합니다.
          </p>
          <button className={styles.button} onClick={() => navigate('/login')}>
            로그인하러 가기
          </button>
        </div>
      </div>
      <FooterSimple />
    </>
  );
};

export default SignupComplete;