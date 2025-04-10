import React from 'react';
import styles from '../../styles/record/AnnualMeetingPage.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import meeting2015 from '../../assets/annual/meeting2015.png';
import meeting2016 from '../../assets/annual/meeting2016.jpg';
import meeting2017 from '../../assets/annual/meeting2017.jpg';

// 더미 데이터
const meetingData = [
  {
    title: '창립총회 2015',
    image: meeting2015,
    pdf: '/pdfs/meeting2015.pdf',
  },
  {
    title: '정기총회 2016',
    image: meeting2016,
    pdf: '/pdfs/meeting2016.pdf',
  },
  {
    title: '정기총회 2017',
    image: meeting2017,
    pdf: '/pdfs/meeting2017.pdf',
  },
];

const AnnualMeetingPage = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.pageTitle}>정기 총회</h3>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={3}
        className={styles.swiper}
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
    </div>
  );
};

export default AnnualMeetingPage;
