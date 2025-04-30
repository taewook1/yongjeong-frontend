import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosInstance';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../../styles/community/FreeboardDetail.module.css';

const FreeboardDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.error('게시글 불러오기 실패:', err);
        alert('게시글을 불러오지 못했습니다.');
      });
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    try {
      await axios.delete(`/posts/${id}`);
      alert('삭제되었습니다.');
      navigate('/community/freeboard');
    } catch (err) {
      console.error('삭제 실패:', err);
      alert('삭제 중 오류 발생');
    }
  };

  const handleEdit = () => {
    navigate(`/community/freeboard/edit/${id}`);
  };

  if (!post) return <p>로딩 중...</p>;

  return (
    <div className={styles.detailContainer}>
      <h2 className={styles.title}>{post.title}</h2>
      <div className={styles.meta}>
        <span>작성자: {post.author}</span>
        <span>{new Date(post.created_at).toLocaleString()}</span>
      </div>
      <div className={styles.content}>{post.content}</div>
      <div className={styles.buttonGroup}>
        <button onClick={handleEdit} className={styles.editBtn}>수정</button>
        <button onClick={handleDelete} className={styles.deleteBtn}>삭제</button>
      </div>
    </div>
  );
};

export default FreeboardDetail;