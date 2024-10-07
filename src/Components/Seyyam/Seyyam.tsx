import { useRef } from "react";
import style from "./Seyyam.module.scss";
import Slider from "react-slick";
import { ISeyyam, useSeyyam } from "./hook/useSeyyam";
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";  // Иконки стрелок

const SimpleSlider = () => {
  const { i18n } = useTranslation();  
  const sliderRef = useRef(null);  // Ссылка на слайдер для управления с помощью кнопок

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,  // Отключаем стандартные стрелки
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data: seyyam } = useSeyyam();
  console.log(seyyam);

  const renderTitle = (seyyamItem: ISeyyam) => {
    switch (i18n.language) {
      case 'ru':
        return seyyamItem.title_ru;
      case 'uz':
        return seyyamItem.title_uz;
      case 'en':
      default:
        return seyyamItem.title_en;
    }
  };

  const renderDescription = (seyyamItem: ISeyyam) => {
    switch (i18n.language) {
      case 'ru':
        return seyyamItem.description_ru;
      case 'uz':
        return seyyamItem.description_uz;
      case 'en':
      default:
        return seyyamItem.description_en;
    }
  };

  const nextSlide = () => {
    // @ts-ignore
    sliderRef.current.slickNext();  // Переход на следующий слайд
  };

  const prevSlide = () => {
    // @ts-ignore
    sliderRef.current.slickPrev();  // Переход на предыдущий слайд
  };

  return (
    <div className={style.container_seyyam}>
      <div id="Seyyam">
        <div className={style.sliderContainer}>
          <Slider ref={sliderRef} {...settings}>
            {seyyam?.map((seyyamItem) => (
              <div className={style.container} key={seyyamItem.id}>
                <div className={style.slider}>
                  <div className={style.card}>
                    <h1>{renderTitle(seyyamItem)}</h1>  
                    <p>{renderDescription(seyyamItem)}</p>  
                  </div>
                  <img src={seyyamItem.img} alt="" />
                </div>
              </div>
            ))}
          </Slider>

          <button className={style.prevButton} onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <button className={style.nextButton} onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleSlider;
