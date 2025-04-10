import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosInstance';
import styles from '../../styles/alumni/AlumniEventsPage.module.css';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AlumniEventsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/alumni-news')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error('동창 동정 전체 불러오기 실패:', err));
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.pageTitle}>주요 행사</h3>
      <ul className={styles.eventList}>
        <motion.div
          className={styles.eventGrid}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {posts.map((post) => (
            <div key={post.id} className={styles.eventCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.title}>{post.title}</h4>
                <p className={styles.date}>{post.created_at.slice(0, 10)}</p>
              </div>
              <p className={styles.preview}>{post.content.slice(0, 120)}...</p>
            </div>
          ))}
        </motion.div>
      </ul>
    </div>
  );
};

export default AlumniEventsPage;