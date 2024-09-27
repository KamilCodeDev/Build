import style from "./Collection.module.scss";
import Slider from "react-slick";
import { useCollection } from "./hook/useCollection";

export default function SimpleSlider() {
  var settings = {
    dots: false, // Включаем точки навигации
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3, // 3 слайда для больших экранов
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Для экранов меньше 1024px (например, планшеты)
        settings: {
          slidesToShow: 2, // Показывать 2 слайда на планшетах
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Для мобильных устройств
        settings: {
          slidesToShow: 1, // Показывать только одно изображение на слайде на экранах меньше 768px
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data: collection } = useCollection();
  console.log(collection);

  return (
    <div id="Collection" className={style.wrapper}>
      <div className={style.container}>
        <h1>OUR COLLECTION</h1>
        <Slider {...settings}>
          {collection?.map((collectionItem) => (
            <div key={collectionItem.id}>
              <img
                className={style.img}
                src={collectionItem.img}
                alt={collectionItem.title}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
