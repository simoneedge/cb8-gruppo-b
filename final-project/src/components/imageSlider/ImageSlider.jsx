import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Card from "../card";

const ImageSlider = ({ experiences }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={600}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
      >
        {experiences.map((experience, index) => (
          <SwiperSlide key={index}>
            <Card experience={experience} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
