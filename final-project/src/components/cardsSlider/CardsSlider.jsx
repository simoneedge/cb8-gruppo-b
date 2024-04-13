import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Card from "../card";

const CardsSlider = ({ experiences }) => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "darkblue",
          margin: "0",
        }}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.3 },
          900: { slidesPerView: 3.4 },
          // 1500: { slidesPerView: 4.3 },
          1024: { slidesPerView: 2.3 },
        }}
        pagination={{ clickable: true }}
        speed={600}
        autoplay={{
          delay: 4000,
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

export default CardsSlider;
