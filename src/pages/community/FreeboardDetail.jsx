import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosInstance';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../../styles/community/FreeboardDetail.module.css';

const FreeboardDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get(`/posts/${id}`).then(res => setPost(res.data)).catch(err => alert('게시글 불러오기 실패'));
    axios.get(`/posts/${id}/comments`).then(res => setComments(res.data)).catch(console.error);
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
  
    try {
      await axios.delete(`/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      alert('삭제되었습니다.');
      navigate('/community/freeboard');
    } catch (err) {
      alert('삭제 중 오류 발생');
      console.error(err);
    }
  };

  const handleEdit = () => navigate(`/community/freeboard/edit/${id}`);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment) return alert('댓글 내용을 입력하세요.');

    try {
      await axios.post(`/posts/${id}/comments`, { content: newComment }, {
        headers: { Authorization: `Bearer ${user?.token}` }
      });
      setNewComment('');
      const res = await axios.get(`/posts/${id}/comments`);
      setComments(res.data);
    } catch (err) {
      console.error('댓글 작성 실패:', err);
    }
  };

  const handleCommentDelete = async (commentId) => {
    if (!window.confirm('댓글을 삭제하시겠습니까?')) return;
    try {
      await axios.delete(`/posts/${id}/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${user?.token}` }
      });
      setComments(comments.filter((c) => c.id !== commentId));
    } catch (err) {
      console.error('댓글 삭제 실패:', err);
    }
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
      {user?.name === post.author && (
        <div className={styles.buttonGroup}>
          <button onClick={handleEdit} className={styles.editBtn}>수정</button>
          <button onClick={handleDelete} className={styles.deleteBtn}>삭제</button>
        </div>
      )}

      {/* 댓글 */}
      <div className={styles.commentSection}>
        <h3>댓글</h3>
        {user ? (
          <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
            <textarea
              placeholder="댓글을 입력하세요"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className={styles.commentTextarea}
            />
            <div className={styles.commentButtonWrapper}>
              <button type="submit" className={styles.commentSubmitBtn}>댓글 작성</button>
            </div>
          </form>
        ) : (
          <p>댓글을 작성하려면 로그인하세요.</p>
        )}

        <ul className={styles.commentList}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.commentItem}>
              <p><strong>{comment.author}</strong>: {comment.content}</p>
              {user?.name === comment.author && (
                <button
                  onClick={() => handleCommentDelete(comment.id)}
                  className={styles.commentDeleteBtn}
                >
                  삭제
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FreeboardDetail;