import styles from "./carousel.module.css";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <BsArrowLeftCircleFill
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={previousSlide}
        />
        {data.map((item, i) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={i}
              className={
                slide === i
                  ? styles.carouselItems
                  : `${styles.carouselItems} ${styles.carouselItemsHidden}`
              }
            />
          );
        })}
        <BsArrowRightCircleFill
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={nextSlide}
        />
        <span className={styles.indicators}>
          {data.map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={
                  slide === i
                    ? styles.indicator
                    : `${styles.indicator} ${styles.indicatorInactive}`
                }
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
}
