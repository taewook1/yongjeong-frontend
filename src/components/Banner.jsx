import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../styles/Banner.css';

const Banner = () => {
  const swiperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const banners = [
    'https://via.placeholder.com/1600x400?text=배너+1',
    'https://via.placeholder.com/1600x400?text=배너+2',
    'https://via.placeholder.com/1600x400?text=배너+3',
  ];

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div
      className="banner-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`배너 ${index + 1}`} className="banner-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 클릭 가능한 넓은 영역 */}
      <div className="click-zone click-zone-left" onClick={handlePrev}></div>
      <div className="click-zone click-zone-right" onClick={handleNext}></div>

      {/* 화살표만 표시 */}
      {isHovered && (
        <>
          <div className="custom-arrow custom-prev">‹</div>
          <div className="custom-arrow custom-next">›</div>
        </>
      )}
    </div>
  );
};

export default Banner;