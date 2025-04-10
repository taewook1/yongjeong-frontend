import React from 'react';
import styles from '../../styles/membership/MembershipGuidePage.module.css';

const MembershipGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={`${styles.title} ${styles.animate} ${styles["delay-1"]}`}>회비 안내</h3>

      <div className={styles.infoBox}>
        <div className={`${styles.duesType} ${styles.animate} ${styles["delay-4"]}`}>
          <div className={styles.card}>
            <h4>💳 정기회비</h4>
            <p>매년 1회 납부<br />연 10,000원</p>
          </div>
          <div className={styles.card}>
            <h4>💎 평생회비</h4>
            <p>1회 납부<br />100,000원</p>
          </div>
        </div>

        <div className={styles.details}>
          <p className={`${styles.text} ${styles.animate} ${styles["delay-2"]}`}>
            총동창회는 동문 여러분의 자발적인 회비로 운영되며,<br />
            회비는 장학 사업, 행사 개최, 동문 네트워크 운영 등 다양한 사업에 투명하게 사용됩니다.
          </p>
          <p className={`${styles.bankInfo} ${styles.animate} ${styles["delay-3"]}`}>
            💰 <strong>회비 납부 계좌</strong><br />
            신한은행 123-456-789012<br />
            예금주: 용정중학교총동창회
          </p>
          <p className={`${styles.text} ${styles.animate} ${styles["delay-4"]}`}>
            ※ 온라인 납부 시스템은 추후 도입 예정입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembershipGuidePage;