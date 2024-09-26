import style from "./Galery.module.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGalery } from "./hook/useGalery";
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

 const {data: galery} = useGalery();
 console.log(galery);
 

    return (
        <div className={style.slide}>
              <h1>ПРОЕКТЫ </h1>
            <div className="slider-container">
                <Slider {...settings}>
                    {galery?.map((galery) => (
                        
                        <div className={style.card} key={galery.id} >
                            <div
                                className="bg-img-hero-center"
                                style={{
                                    backgroundImage: `url(${galery.img})`,
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
