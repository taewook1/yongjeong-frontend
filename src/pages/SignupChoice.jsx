import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SignupChoice.module.css';
import FooterSimple from '../components/FooterSimple';

const SignupChoice = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.logoWrap}>
            <img src="/logo.png" alt="용정중학교 로고" className={styles.logo} />
          </div>
          <h2 className={styles.title}>회원가입을 시작합니다!</h2>
          <p className={styles.subtitle}>용정 동창들의 소중한 인연, 지금 함께 시작하세요.</p>
          <button
            className={styles.signupButton}
            onClick={() => navigate('/signup/terms')}
          >
            일반 회원가입
          </button>

          <div className={styles.snsWrap}>
            <div className={styles.divider}>
              <hr /><span>SNS 로그인</span><hr />
            </div>
            <div className={styles.snsButtons}>
              <button className={styles.kakao}>카카오톡</button>
              <button className={styles.naver}>네이버</button>
            </div>
          </div>
        </div>
      </div>
      <FooterSimple />
    </>
  );
};

export default SignupChoice;