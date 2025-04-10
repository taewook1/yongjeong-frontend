import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import styles from '../../styles/foundation/ScholarshipIntroPage.module.css';

const ScholarshipIntroPage = () => {
  return (
    <>
      <div className={styles.container}>
        <motion.div 
          className={styles.textBox}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={styles.title}>재단 소개</h3>
          <p>
            용정중학교 총동창회 장학재단은 인재 양성과 교육 발전을 위해 설립되었습니다.<br />
            동문들의 따뜻한 후원으로 운영되며, 성적 우수 및 형편이 어려운 학생들을 위한 다양한 장학 사업을 펼치고 있습니다.
          </p>
        </motion.div>

        <motion.div 
          className={styles.textBox}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className={styles.title}>설립 목적</h3>
          <ul>
            <li>경제적 어려움으로 학업 지속이 어려운 학생들을 지원</li>
            <li>우수한 성적을 거둔 학생들의 노력 격려</li>
            <li>동문 간 나눔 문화 조성과 사회적 책임 실현</li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default ScholarshipIntroPage;
