import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosInstance';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../../styles/community/FreeboardWrite.module.css';

const FreeboardEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios.get(`/posts/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setAuthor(res.data.author);
      })
      .catch((err) => {
        console.error('불러오기 실패:', err);
        alert('게시글을 불러오지 못했습니다.');
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    try {
      await axios.put(`/posts/${id}`, { title, content, author });
      alert('수정되었습니다.');
      navigate(`/community/freeboard/${id}`);
    } catch (err) {
      console.error('수정 실패:', err);
      alert('수정 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles['write-container']}>
      <h2 className={styles['write-title']}>게시글 수정</h2>
      <form onSubmit={handleSubmit} className={styles['write-form']}>
        <input
          type="text"
          className={styles['input-title']}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={styles['input-content']}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className={styles['submit-btn']}>수정 완료</button>
      </form>
    </div>
  );
};

export default FreeboardEdit;