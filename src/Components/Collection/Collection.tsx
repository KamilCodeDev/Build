import style from "./Collection.module.scss";
import Slider from "react-slick";
import { useCollection } from "./hook/useCollection";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
