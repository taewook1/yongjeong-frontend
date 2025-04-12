import React from 'react';
import styles from '../styles/MembershipFeeGuide.module.css';
import { useNavigate } from 'react-router-dom';

const MembershipFeeGuide = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>동창회비 납부안내</p>
        <h2 className={styles.title}>
          당신의 회비는,<br />
          용정을 이어주는 따뜻한 마음입니다.
        </h2>
        <p className={styles.description}>
          함께한 시간, 그리운 얼굴, 그리고 변함없는 정(情).<br />
          동창회비는 단지 돈이 아닌, 용정을 잇는 마음의 끈입니다.<br />
          후배들에게 이어질 응원과, 동창창사회가 지속될 수 있는<br />
          든든한 뿌리가 되어 주세요.
        </p>
        <button className={styles.button} onClick={() => navigate('/membership/guide')}>
          <span className={styles.buttonText}>자세히 보기 &gt;</span>
        </button>
      </div>
    </section>
  );
};

export default MembershipFeeGuide;