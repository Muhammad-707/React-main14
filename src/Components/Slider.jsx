import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Slider = memo(({ images }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 300 }}
      loop={true}
    >
      {images?.map((image) => (
        <SwiperSlide key={image.id}>
          <img
            src={`http://37.27.29.18:8001/images/${image.imageName}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default Slider;