import styles from "./home.module.css";
import Carousel from "./Carousel";
import { slides } from "../../data/carouselData.json";

export default function Home() {
  return (
    <>
      <Carousel data={slides} />
    </>
  );
}
