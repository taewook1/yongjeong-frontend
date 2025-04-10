import React from 'react';
import styles from '../../styles/intro/GreetingPage.module.css';

const greetings = [
  {
    role: '총동창회장 인사말',
    name: '홍길동 회장',
    content: `용정중학교 총동창회 홈페이지를 방문해주셔서 감사합니다. 
    우리 동문들의 끈끈한 우정과 자긍심이 모여 더 큰 미래로 나아갈 수 있기를 바랍니다.`,
  },
  {
    role: '설립자 인사말',
    name: '이용정 설립자',
    content: `설립 당시의 마음가짐을 잊지 않고, 모든 동문과 함께 
    학교의 발전과 지역 사회를 위한 가치를 실현해 나가겠습니다.`,
  },
  {
    role: '총동창회 학부모 인사말',
    name: '김학부모 회장',
    content: `자녀를 용정중학교에 보낸 학부모로서, 우리 아이들이 더 나은 환경에서 
    성장할 수 있도록 총동창회와 함께 응원하겠습니다.`,
  },
  {
    role: '학교장 인사말',
    name: '최교장 선생님',
    content: `용정중학교를 사랑해주시는 모든 분들께 감사드리며, 
    학교와 동문이 함께 성장하는 미래를 만들어가겠습니다.`,
  },
];

const GreetingPage = () => {
  return (
    <div className={styles.greetingContainer}>
      {greetings.map((greet, index) => (
        <div key={index} className={styles.greetingBlock}>
          <h3 className={styles.greetingRole}>{greet.role}</h3>
          <p className={styles.greetingContent}>{greet.content}</p>
          <p className={styles.greetingName}>– {greet.name}</p>
        </div>
      ))}
    </div>
  );
};

export default GreetingPage;