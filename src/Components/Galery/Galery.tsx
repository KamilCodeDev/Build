import style from "./Galery.module.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Gallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 2,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const slides = [
        { id: 1, image: "https://picsum.photos/300" },
        { id: 2, image: "https://picsum.photos/300" },
        { id: 3, image: "https://picsum.photos/300" },
        { id: 4, image: "https://picsum.photos/300" },
        { id: 5, image: "https://picsum.photos/300" },
        { id: 6, image: "https://picsum.photos/300" },
        { id: 7, image: "https://picsum.photos/300" },
        { id: 8, image: "https://picsum.photos/300" },
    ];

    return (
        <div className={style.slide}>
              <h1>ПРОЕКТЫ </h1>
            <div className="slider-container">
                <Slider {...settings}>
                    {slides.map((slide) => (
                        
                        <div className={style.card} key={slide.id} >
                            <div
                                className="bg-img-hero-center"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    minHeight: "700px" ,
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
