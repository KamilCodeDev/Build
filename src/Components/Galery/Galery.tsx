import style from './Galery.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import { useGalery, IGalery } from './hook/useGalery';

const Gallery = () => {
  const { i18n, t } = useTranslation();
  const { data: galery } = useGalery();

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // Функция для отображения заголовка галереи в зависимости от текущего языка
  const renderTitle = (galeryItem: IGalery) => {
    switch (i18n.language) {
      case 'ru':
        return galeryItem.title_ru;
      case 'uz':
        return galeryItem.title_uz;
      case 'en':
      default:
        return galeryItem.title_en;
    }
  };

  return (
    <section id='Project' className={style.section}>
      <div className={style.container}>
        <h2>{t('projects')}</h2>
        <Swiper
          spaceBetween={40}
          loop={true}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          modules={[Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.3,
            },
          }}
          className={style.swiper}
        >
          {galery?.map((item) => (
            <SwiperSlide key={item.id} className={style.item}>
              <img src={item.img} alt='' />
              <b>{renderTitle(item)}</b>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.nav}>
          <button ref={prevRef}>
            <FaArrowLeft size={20} />
          </button>
          <button ref={nextRef}>
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
