import Carousel from "./Carousel";
import { slides } from "../../data/carouselData.json";
import { images } from "../../data/imagesData.json";
import styles from "./Artworks.module.css";
import GalleryGrid from "./GalleryGrid";

export default function Artworks() {
  return (
    <div className={styles.artworksPage}>
      <Carousel data={slides} />
      <GalleryGrid data={images} />
    </div>
  );
}
