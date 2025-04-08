import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SignupTerms.module.css';
import FooterSimple from '../components/FooterSimple';
import { ChevronRight } from 'lucide-react';

const SignupTerms = () => {
  const navigate = useNavigate();
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    thirdParty: false,
  });

  const handleAllAgree = () => {
    const newValue = !agreeAll;
    setAgreeAll(newValue);
    setAgreements({
      terms: newValue,
      privacy: newValue,
      thirdParty: newValue,
    });
  };

  const handleSingleAgree = (field) => {
    const updated = { ...agreements, [field]: !agreements[field] };
    setAgreements(updated);
    const allChecked = Object.values(updated).every(Boolean);
    setAgreeAll(allChecked);
  };

  const handleNext = () => {
    const allRequiredAgreed = agreements.terms && agreements.privacy && agreements.thirdParty;
    if (!allRequiredAgreed) {
      alert('모든 필수 항목에 동의해주세요.');
      return;
    }
    navigate('/signup/form');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title}>회원가입</h2>
          <p className={styles.subtitle}>가입을 위해 아래 약관을 확인하고 동의해주세요.</p>

          <div className={styles.stepper}>
            <span className={styles.activeStep}>동의 및 인증</span>
            <span className={styles.separator}>&gt;</span>
            <span className={styles.inactiveStep}>정보입력</span>
          </div>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkRow}>
              <input type="checkbox" checked={agreeAll} onChange={handleAllAgree} />
              <span className={`${styles.circle} ${agreeAll ? styles.checked : ''}`} />
              <span className={styles.labelText}>모두 동의합니다</span>
            </label>

            <hr className={styles.divider} />

            {[
              { id: 'terms', label: '이용약관 동의 (필수)' },
              { id: 'privacy', label: '개인정보 수집/이용 동의 (필수)' },
              { id: 'thirdParty', label: '제 3자 정보제공 (필수)' },
            ].map((item) => (
              <label key={item.id} className={styles.checkRow}>
                <input
                  type="checkbox"
                  checked={agreements[item.id]}
                  onChange={() => handleSingleAgree(item.id)}
                />
                <span className={`${styles.circle} ${agreements[item.id] ? styles.checked : ''}`} />
                <span className={styles.labelText}>{item.label}</span>
                <button className={styles.arrowBtn}>
                  <ChevronRight size={18} />
                </button>
              </label>
            ))}
          </div>

          <button className={styles.nextButton} onClick={handleNext}>
            본인 인증
          </button>
        </div>
      </div>
      <FooterSimple />
    </>
  );
};

export default SignupTerms;