import styles from "./GalleryGrid.module.css";

export default function GalleryGrid({ data }) {

  return (
    <div className={styles.mainGallery}>
      {data.map((x, i) => (
        <div className={styles.imageContainer} key={i}>
          <img src={x.src} alt={x.alt} key={i} className={styles.image}/>
        </div>
      ))}
    </div>
  );
}
