import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosInstance';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../../styles/community/FreeboardDetail.module.css';

const FreeboardDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.error('게시글 불러오기 실패:', err);
        alert('게시글을 불러오지 못했습니다.');
      });

    axios.get(`/posts/${id}/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => {
        console.error('댓글 불러오기 실패:', err);
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

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!author || !newComment) return alert('작성자와 내용을 입력해주세요.');

    try {
      await axios.post(`/posts/${id}/comments`, {
        author,
        content: newComment,
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
      await axios.delete(`/posts/${id}/comments/${commentId}`);
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
      <div className={styles.buttonGroup}>
        <button onClick={handleEdit} className={styles.editBtn}>수정</button>
        <button onClick={handleDelete} className={styles.deleteBtn}>삭제</button>
      </div>

      {/* 댓글 섹션 */}
      <div className={styles.commentSection}>
        <h3>댓글</h3>
        <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
          <input
            type="text"
            placeholder="작성자"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={styles.commentAuthorInput}
          />
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

        <ul className={styles.commentList}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.commentItem}>
              <p>
                <strong>{comment.author}</strong>: {comment.content}
              </p>
              <button
                onClick={() => handleCommentDelete(comment.id)}
                className={styles.commentDeleteBtn}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FreeboardDetail;