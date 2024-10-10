import { useTranslation } from "react-i18next";
import style from "./Galery.module.scss";
import { useGalery, IGalery } from "./hook/useGalery";

// Импортируем стили slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Импортируем сам слайдер
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"; // Иконки для кастомных стрелок
import Gal from "./Gal";

const Gallery = () => {
    //@ts-ignore
    const { i18n, t } = useTranslation();
    const { data: galery } = useGalery();

    // Кастомные кнопки навигации
    const PreviousBtn = (props: any) => {
        const { onClick } = props;
        return (
            <div className={style.prevButton} onClick={onClick}>
                <SlArrowLeft size={30} />
            </div>
        );
    };

    const NextBtn = (props: any) => {
        const { onClick } = props;
        return (
            <div className={style.nextButton} onClick={onClick}>
                <SlArrowRight size={30} />
            </div>
        );
    };

    // Настройки для слайдера
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        autoplay: true,
        centerMode: true,
        centerPadding: "100px",
    };

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
        <div >
            <div className={style.galleryContainer}>
                <Gal/>
            <h2 >{i18n.t("projects")}</h2>
                <Slider {...settings}>
                    {galery?.map((galeryItem) => (
                        <div data-aos="fade-up" key={galeryItem.id} className={style.slideItem}>
                            <div className={style.imageWrapper} style={{ marginRight: "20px", position: "relative" }}>
                                <img src={galeryItem.img} alt="" className={style.image} style={{ borderRadius: '5px' }} />
                                <div className={style.overlay}>
                                    <h1 className={style.overlayTitle} >
                                        {renderTitle(galeryItem)}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Gallery;

