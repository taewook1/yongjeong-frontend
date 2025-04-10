import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/LoginPage.module.css';
import FooterSimple from '../components/FooterSimple';
import axios from '../api/axiosInstance';
import { Link } from 'react-router-dom';
import logo from '../assets/yongjeong-logo.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    try {
      const res = await axios.post('/auth/login', {
        username: form.username,
        password: form.password,
      });

      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/');
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.msg || '로그인에 실패했습니다.';
      alert(msg);
    }
  };

  const [placeholderUsername, setPlaceholderUsername] = useState('아이디');
  const [placeholderPw, setPlaceholderPw] = useState('비밀번호');

  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.logoWrap}>
            <Link to="/">
              <img src={logo} alt="용정중학교 총동창회 로고" />
            </Link>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              onFocus={() => setPlaceholderUsername('')}
              onBlur={() => {
                if (form.username === '') setPlaceholderUsername('아이디');
              }}
              placeholder={placeholderUsername}
              className={styles.input}
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              onFocus={() => setPlaceholderPw('')}
              onBlur={() => {
                if (form.password === '') setPlaceholderPw('비밀번호');
              }}
              placeholder={placeholderPw}
              className={styles.input}
            />
            <button type="submit" className={styles.loginButton}>
              로그인
            </button>
          </form>

          <div className={styles.snsWrap}>
            <div className={styles.snsDivider}>
              <hr /><span>SNS 로그인</span><hr />
            </div>
            <div className={styles.snsButtons}>
              <button className={styles.kakao}>카카오톡</button>
              <button className={styles.naver}>네이버</button>
            </div>
          </div>

          <div className={styles.linkRow}>
            <div className={styles.leftLinks}>
              <button onClick={() => navigate('/find-id')} className={styles.textButton}>아이디 찾기</button>
              <span>|</span>
              <button onClick={() => navigate('/reset-password')} className={styles.textButton}>비밀번호 재설정</button>
            </div>
            <button onClick={() => navigate('/signup')} className={styles.signupBtn}>회원가입</button>
          </div>
        </div>
      </div>

      <FooterSimple />
    </>
  );
};

export default LoginPage;