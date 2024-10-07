import style from "./Galery.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGalery } from "./hook/useGalery";

const Gallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // 2 слайда для больших экранов
        slidesToScroll: 1,
        rows: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768, // Адаптация для экранов меньше 768px (мобильные)
                settings: {
                    slidesToShow: 1, // Один слайд на экранах меньше 768px
                    slidesToScroll: 1,
                    //rows: 1, // Один ряд на мобильных экранах
                },
            },
        ],
    };
    

    const { data: galery } = useGalery();
    console.log(galery);

    return (
        <div className={style.slide}>
            <h1>ПРОЕКТЫ</h1>
            <div >
                <Slider {...settings}>
                    {galery?.map((galery) => (
                        <div className={style.card} key={galery.id}>
                            <div
                                className="bg-img-hero-center"
                                style={{
                                    backgroundImage: `url(${galery.img})`,
                                    width:"600px",
                                    minHeight: "600px", // Высота остается неизменной для больших экранов
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Gallery;
