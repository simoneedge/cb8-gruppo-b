import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const ImageSlider = ({ images }) => {
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt="image"
              style={{
                height: "300px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "30px",
                padding: "4px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
