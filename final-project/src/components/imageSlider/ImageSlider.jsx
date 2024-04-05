import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.scss";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.Slider}>
            <img
              src={image}
              alt="image"
              style={{
                height: "400px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "30px",
                padding: "4px",
              }}
            />
          </div>
        ))}
      </Slider>
      <div className={styles.dot}>
        <span>l</span>
      </div>
    </div>
  );
};

export default ImageSlider;
