import { Link } from "react-router-dom";
import "./Product.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from "react";
import { CustomContext } from "../../Context";

export const Slider = ({ product }) => {
  const { shop } = useContext(CustomContext);
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={40}
      navigation={true}
      loop={true}
      autoPlay={true}
      speed={2000}
      autoplay={{ delay: 3000 }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
    >
      {shop
        .filter(
          (item) =>
            item.category === product?.category && item.id != product?.id
        )
        .map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Link to="/shop">
                <LazyLoadImage
                  src={`../${item.image.black}`}
                  alt=""
                  effect="blur"
                />
              </Link>
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
