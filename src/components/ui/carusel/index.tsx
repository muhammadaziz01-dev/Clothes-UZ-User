// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.scss";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // 3 soniyada slayd almashadi
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="flex items-center justify-center bg-slate-400">
          <div>
            <h1>Slid 1</h1>
            <p>slide text</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center bg-red-500">
          <div>
            <h1>Slid 2</h1>
            <p>slide text</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center bg-yellow-300">
          <div>
            <h1>Slid 3</h1>
            <p>slide text</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center bg-blue-300">
          <div>
            <h1>Slid 4</h1>
            <p>slide text</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
