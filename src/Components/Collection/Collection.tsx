import { useTranslation } from 'react-i18next';  // Добавляем хук для перевода
import { useRef } from "react";
import style from "./Collection.module.scss";
import Slider from "react-slick";
import { useCollection } from "./hook/useCollection";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SimpleSlider() {
  const sliderRef = useRef(null);
  const { t } = useTranslation();  // Используем хук для получения функции перевода

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data: collection } = useCollection();
  console.log(collection);

  const nextSlide = () => {
    //@ts-ignore
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    //@ts-ignore
    sliderRef.current.slickPrev();
  };

  return (
    <div id="Collection" className={style.wrapper}>
      <div className={style.container}>
        <h1>{t("Simple:komil")}</h1>  

        <Slider ref={sliderRef} {...settings}>
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

        {/* Кнопки для перелистывания */}
        <button className={style.prevButton} onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <button className={style.nextButton} onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
