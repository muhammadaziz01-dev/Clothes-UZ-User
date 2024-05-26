// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.scss";

import {
  CaruselImg1,
  CaruselImg2,
  CaruselImg3,
  CaruselImg4,
  CaruselImg5,
} from "@imgs";

export default () => {
  const imgList = [
    CaruselImg1,
    CaruselImg2,
    CaruselImg3,
    CaruselImg4,
    CaruselImg5,
  ];
  return (
    
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // 3 soniyada slayd almashadi
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {imgList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full h-[400px]">
                <img
                  className="w-full h-full  object-fill object-center rounded-xl"
                  src={item}
                  alt="Carusel img"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
};
