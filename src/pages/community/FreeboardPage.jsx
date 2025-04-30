import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/community/FreeboardPage.module.css';

const FreeboardPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error('게시글 불러오기 실패:', err);
      });
  }, []);

  const handleWriteClick = () => {
    navigate('/community/freeboard/write');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>자유게시판</h2>
        <button onClick={handleWriteClick} className={styles.writeButton}>글쓰기</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id} onClick={() => navigate(`/community/freeboard/${post.id}`)}>
              <td>{posts.length - index}</td>
              <td className={styles.titleCell}>{post.title}</td>
              <td>{post.author}</td>
              <td>{new Date(post.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FreeboardPage;