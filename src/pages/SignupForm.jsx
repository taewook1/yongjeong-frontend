
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SignupForm.module.css';
import FooterSimple from '../components/FooterSimple';
import axios from '../api/axiosInstance';

const isValidDate = (yyyymmdd) => {
  if (!/^\d{8}$/.test(yyyymmdd)) return false;
  const year = parseInt(yyyymmdd.substring(0, 4));
  const month = parseInt(yyyymmdd.substring(4, 6));
  const day = parseInt(yyyymmdd.substring(6, 8));
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

const SignupForm = () => {
  const navigate = useNavigate();
  const inputRefs = useRef({});
  const [form, setForm] = useState({
    name: '',
    birth: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    generation: '',
  });

  const [errors, setErrors] = useState({});
  const [isDuplicate, setIsDuplicate] = useState(null);
  const [checking, setChecking] = useState(false);

  const [codeSent, setCodeSent] = useState(false);
  const [authCode, setAuthCode] = useState('');
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ((name === 'birth' || name === 'phone') && /[^0-9]/.test(value)) return;
    setForm({ ...form, [name]: value });
    if (name === 'username') setIsDuplicate(null);
    setErrors({ ...errors, [name]: '' });
  };

  const checkDuplicate = async () => {
    if (!form.username || !/^[a-zA-Z0-9]{5,20}$/.test(form.username)) {
      setErrors((prev) => ({
        ...prev,
        username: '아이디는 영문+숫자 5~20자로 입력해주세요.',
      }));
      return;
    }

    try {
      setChecking(true);
      const res = await axios.get(`auth/check-username?username=${form.username}`);
      console.log('중복 확인 응답:', res);
      setIsDuplicate(res.data.exists);
    } catch (err) {
      console.error(err);
      alert('중복 확인 중 오류가 발생했습니다.');
    } finally {
      setChecking(false);
    }
  };

  const sendCode = async () => {
    try {
      await axios.post(`/auth/send-code`, { phone: form.phone });
      setCodeSent(true);
      alert('인증번호가 전송되었습니다.');
    } catch (err) {
      console.error(err);
      alert('인증번호 전송에 실패했습니다.');
    }
  };

  const verifyCode = async () => {
    try {
      const res = await axios.post(`/auth/verify-code`, {
        phone: form.phone,
        code: authCode,
      });
      if (res.data.success) {
        setIsPhoneVerified(true);
        setErrors(prev => ({ ...prev, phone: '' }));
        alert('인증이 완료되었습니다.');
      } else {
        alert('인증번호가 올바르지 않습니다.');
      }
    } catch (err) {
      console.error(err);
      alert('인증번호 확인 중 오류가 발생했습니다.');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name || !/^[a-zA-Z가-힣]{2,}$/.test(form.name)) {
      newErrors.name = '이름은 한글 또는 영문 2자 이상이어야 합니다.';
    }

    if (!isValidDate(form.birth)) {
      newErrors.birth = '유효한 생년월일(YYYYMMDD)을 입력해주세요.';
    }

    if (!/^010\d{7,8}$/.test(form.phone)) {
      newErrors.phone = '휴대폰 번호는 010으로 시작하는 10~11자리 숫자여야 합니다.';
    } else if (!isPhoneVerified) {
      newErrors.phone = '휴대폰 인증이 완료되지 않았습니다.';
    }

    if (!/^[a-zA-Z0-9]{5,20}$/.test(form.username)) {
      newErrors.username = '아이디는 영문+숫자 5~20자로 입력해주세요.';
    } else if (isDuplicate !== false) {
      newErrors.username = '아이디 중복 확인이 필요하거나, 사용할 수 없는 아이디입니다.';
    }

    if (!/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/.test(form.password)) {
      newErrors.password = '비밀번호는 8자 이상, 영문+숫자+특수문자를 포함해야 합니다.';
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.keys(newErrors)[0];
      inputRefs.current[firstError]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post('/auth/register', { ...form });
      navigate('/signup-complete'); // ✅ 무조건 성공하면 이동
    } catch (err) {
      console.error(err);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title}>회원 정보 입력</h2>
          <p className={styles.subtitle}>정확한 정보를 입력해 주세요.</p>

          <div className={styles.stepper}>
            <span className={styles.inactiveStep}>동의 및 인증</span>
            <span className={styles.separator}>&gt;</span>
            <span className={styles.activeStep}>정보입력</span>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            
            {/* 아이디 + 중복 확인 */}
            <div className={styles.inputWrap}>
              <div className={styles.idRow}>
                <input
                  ref={(el) => inputRefs.current.username = el}
                  name="username"
                  placeholder="아이디"
                  value={form.username}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.username ? styles.errorInput : ''}`}
                />
                <button
                  type="button"
                  className={styles.dupButton}
                  onClick={checkDuplicate}
                  disabled={checking}
                >
                  {checking ? '확인 중...' : '중복 확인'}
                </button>
              </div>
              {errors.username && <p className={styles.errorMsg}>{errors.username}</p>}
              {isDuplicate === false && <p className={styles.successMsg}>사용 가능한 아이디입니다.</p>}
              {isDuplicate === true && <p className={styles.errorMsg}>이미 사용 중인 아이디입니다.</p>}
            </div>

            {['name', 'birth'].map((name) => (
              <div key={name} className={styles.inputWrap}>
                <input
                  ref={(el) => inputRefs.current[name] = el}
                  name={name}
                  placeholder={name === 'name' ? '이름' : '생년월일 (예: 19900101)'}
                  value={form[name]}
                  onChange={handleChange}
                  maxLength={name === 'birth' ? 8 : undefined}
                  inputMode={name === 'birth' ? 'numeric' : undefined}
                  className={`${styles.input} ${errors[name] ? styles.errorInput : ''}`}
                />
                {errors[name] && <p className={styles.errorMsg}>{errors[name]}</p>}
              </div>
            ))}
            {/* 기수 인증 */}
            <div className={styles.inputWrap}>
              <input
                type="number"
                name="generation"
                placeholder="기수 (예: 32)"
                value={form.generation}
                onChange={handleChange}
                className={`${styles.input} ${errors.generation ? styles.errorInput : ''}`}
                min="1"
                max="999"
              />
              {errors.generation && <p className={styles.errorMsg}>{errors.generation}</p>}
            </div>

            {/* 휴대폰 번호 + 인증번호 받기 */}
            <div className={styles.inputWrap}>
              <div className={styles.idRow}>
                <input
                  ref={(el) => inputRefs.current.phone = el}
                  name="phone"
                  placeholder="휴대폰 번호 (예: 01012345678)"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={11}
                  inputMode="numeric"
                  className={`${styles.input} ${errors.phone ? styles.errorInput : ''}`}
                />
                <button
                  type="button"
                  className={styles.dupButton}
                  onClick={sendCode}
                  disabled={!form.phone || form.phone.length < 10}
                >
                  인증번호 받기
                </button>
              </div>
              {errors.phone && <p className={styles.errorMsg}>{errors.phone}</p>}

              {codeSent && !isPhoneVerified && (
                <div className={styles.idRow}>
                  <input
                    type="text"
                    placeholder="인증번호 입력"
                    value={authCode}
                    onChange={(e) => setAuthCode(e.target.value)}
                    className={styles.input}
                  />
                  <button type="button" className={styles.dupButton} onClick={verifyCode}>
                    확인
                  </button>
                </div>
              )}

              {isPhoneVerified && (
                <p className={styles.successMsg}>휴대폰 인증 완료 ✅</p>
              )}
            </div>

            {/* 비밀번호 */}
            {['password', 'confirmPassword'].map((name) => (
              <div key={name} className={styles.inputWrap}>
                <input
                  ref={(el) => inputRefs.current[name] = el}
                  type="password"
                  name={name}
                  placeholder={name === 'password' ? '비밀번호' : '비밀번호 확인'}
                  value={form[name]}
                  onChange={handleChange}
                  className={`${styles.input} ${errors[name] ? styles.errorInput : ''}`}
                />
                {errors[name] && <p className={styles.errorMsg}>{errors[name]}</p>}
              </div>
            ))}

            <button type="submit" className={styles.submitButton}>가입 완료</button>
          </form>
        </div>
      </div>
      <FooterSimple />
    </>
  );
};

export default SignupForm;