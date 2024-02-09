import styles from "./home.module.css";
import Carousel from "./Carousel";
import { slides } from "../../data/carouselData.json";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.mainContainer}>
         <img src="src/assets/hiddenImage.jpg" alt="rose-photo" className={styles.hiddenImg}/>
         <div className={styles.coverBlock}></div>
         <img src="src/assets/paint-brush.png" alt="paint-brush-graphic" className={styles.brushImg}/>
      </div>
      <Carousel data={slides} />
    </div>
  );
}
