import React, { useState } from 'react';
import axios from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/community/FreeboardWrite.module.css';

const FreeboardWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    try {
      await axios.post('/posts', {
        title,
        content,
        author: '익명', // 추후 로그인 사용자 정보로 대체
      });
      alert('게시글이 등록되었습니다.');
      navigate('/community/freeboard');
    } catch (error) {
      console.error('게시글 등록 실패:', error);
      alert('등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles['write-container']}>
    <h2 className={styles['write-title']}>게시글 작성</h2>
    <form onSubmit={handleSubmit} className={styles['write-form']}>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles['input-title']}
      />
      <textarea
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={styles['input-content']}
      />
      <button type="submit" className={styles['submit-btn']}>등록</button>
    </form>
  </div>
  );
};

export default FreeboardWrite;