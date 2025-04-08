import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SignupForm.module.css';
import FooterSimple from '../components/FooterSimple';

const SignupForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    birth: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 추후 유효성 검사 추가 가능
    console.log('회원가입 데이터:', form);
    alert('회원가입 완료!');
    navigate('/');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title}>회원 정보 입력</h2>
          <p className={styles.subtitle}>정확한 정보를 입력해 주시기 바랍니다.</p>

          <div className={styles.stepper}>
            <span className={styles.inactiveStep}>동의 및 인증</span>
            <span className={styles.separator}>&gt;</span>
            <span className={styles.activeStep}>정보입력</span>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="이름"
              value={form.name}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              type="text"
              name="birth"
              placeholder="생년월일 (예: 19900101)"
              value={form.birth}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              type="text"
              name="phone"
              placeholder="연락처 (예: 01012345678)"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              type="text"
              name="username"
              placeholder="아이디"
              value={form.username}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="비밀번호"
              value={form.password}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            <button type="submit" className={styles.submitButton}>
              가입 완료
            </button>
          </form>
        </div>
      </div>
      <FooterSimple />
    </>
  );
};

export default SignupForm;