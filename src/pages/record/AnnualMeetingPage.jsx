import React, { useRef } from 'react';
import styles from '../../styles/record/AnnualMeetingPage.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import meeting2015 from '../../assets/annual/meeting2015.png';
import meeting2016 from '../../assets/annual/meeting2016.jpg';
import meeting2017 from '../../assets/annual/meeting2017.jpg';
import meeting2018 from '../../assets/annual/meeting2017.jpg';

// 더미 데이터
const meetingData = [
  {
    title: '정기총회 2018',
    image: meeting2018,
    pdf: '/pdfs/meeting2018.pdf',
  },
  {
    title: '정기총회 2017',
    image: meeting2017,
    pdf: '/pdfs/meeting2016.pdf',
  },
  {
    title: '정기총회 2016',
    image: meeting2016,
    pdf: '/pdfs/meeting2017.pdf',
  },
  {
    title: '창립총회 2015',
    image: meeting2015,
    pdf: '/pdfs/meeting2015.pdf',
  },
];




const AnnualMeetingPage = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.pageTitle}>정기 총회</h3>
      
      {/* 🔽 커스텀 화살표 버튼 DOM 먼저 생성 */}
      <div className={styles.navWrapper}>
        <div ref={prevRef} className={styles.customPrev}>←</div>
        <div ref={nextRef} className={styles.customNext}>→</div>
      </div>
      <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
      >
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={24}
          slidesPerView={3}
          className={styles.swiper}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {meetingData.map((item, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.card}>
                <img src={item.image} alt={item.title} className={styles.image} />
                <h4 className={styles.title}>{item.title}</h4>
                <a
                  href={item.pdf}
                  className={styles.downloadBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  회의록 PDF 다운로드
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default AnnualMeetingPage;
