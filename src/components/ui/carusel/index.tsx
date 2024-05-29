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

// import {
//   CaruselImg1,
//   CaruselImg2,
//   CaruselImg3,
//   CaruselImg4,
//   CaruselImg5,
// } from "@imgs";

export default () => {
  const imgList = [
    "https://media.bulavka.uz/products/0IUeBKQy03/0IUeBKQy03?version=1712137984354",
    "https://media.bulavka.uz/products/KiAPhwdsIL/KiAPhwdsIL?version=1710082491140",
    "https://media.bulavka.uz/products/PRJgCAq0uW/PRJgCAq0uW?version=1702552585854",
    "https://media.bulavka.uz/products/KafK1c0s3v/KafK1c0s3v?version=1702551931532",
    "https://media.bulavka.uz/products/qPzLWHbSuK/qPzLWHbSuK?version=17025525994170",
    "https://media.bulavka.uz/products/NbEgIvox90/NbEgIvox90?version=1702552608886",
    "https://media.bulavka.uz/products/eWkNxEcLLn/eWkNxEcLLn?version=1702552627545"
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
              <div className="w-full h-[300px]">
                <img
                  className="w-full h-full object-fill object-center rounded-2xl"
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
