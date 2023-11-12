import Slider from "react-slick";

import styles from "./Tending.module.scss";

const Tending = ({ TendingNow, getData }) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 8,
    swipeToSlide: true,
  };

  return (
    <Slider {...settings} className={styles.tending}>
      {TendingNow.map((item) => (
        <div className={styles.tending__item} key={item.Id} onClick={() => getData(item)}>
          <img
            src={require(`../../assets/images/${item.CoverImage}`)}
            alt={item.Title}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Tending;
