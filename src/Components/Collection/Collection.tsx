import style from "./Collection.module.scss";
import Slider from "react-slick";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/imh7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img0 from "../../assets/img0.jpg";
import video1 from '../../assets/video1.mp4';
import { useCollection } from "./hook/useCollection";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleVideoError = () => {
    console.error("Ошибка загрузки видео.");
  };

  const { data: collection } = useCollection();
  console.log(collection);


  return (
    <div id="Collection" className={style.wrapper}>
      {/* <video className={style.video} autoPlay loop muted playsInline onError={handleVideoError}>
        <source src={video1} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video> */}

      <div className={style.container}>
        <h1>OUR COLLECTION</h1>
        <Slider {...settings}>
          {collection?.map((collectionItem) => (
            <div>
              <h3><img className={style.img} src={collectionItem.img} alt="image 5" /></h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
