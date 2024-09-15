import style from "./Collection.module.scss"
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3 ,
    slidesToScroll: 1,
  };
  return (
    <div className={style.container}>
    <Slider {...settings}>
      <div>
        <h3><img className={style.img} src="https://picsum.photos/300" alt="" /></h3>
      </div>
      <div>
        <h3><img className={style.img} src="https://picsum.photos/300" alt="" /></h3>
      </div>
      <div>
        <h3><img className={style.img} src="https://picsum.photos/300" alt="" /></h3>
      </div>
      <div>
        <h3><img className={style.img} src="https://picsum.photos/300" alt="" /></h3>
      </div>
      <div>
        <h3><img className={style.img} src="https://picsum.photos/300" alt="" /></h3>
      </div>
      <div>
        <h3><img  src="https://picsum.photos/300" alt="" /></h3>
      </div>
    </Slider>
    </div>
  );
}