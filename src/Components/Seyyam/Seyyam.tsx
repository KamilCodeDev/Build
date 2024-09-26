import style from "./Seyyam.module.scss"
import Slider from "react-slick";
import { useSeyyam } from "./hook/useSeyyam"
// @ts-ignore
const NextArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{
            ...style,
            display: "none",
            right: "10px",
            zIndex: 1,
            color: "#ff0000",
            fontSize: "30px",
        }}
        onClick={onClick}
    />
);
function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow className={undefined} style={undefined} onClick={undefined} />,
        responsive: [


            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const { data: seyyam } = useSeyyam();
    console.log(seyyam);




    return (
        <div>
            <div id="Seyyam">
                
                <div className="slider-container">
                    <Slider {...settings}>
                        
                    {seyyam?.map((seyyam) => (
                        <div className={style.container}>
                                <div className={style.slider}>
                                    
                                    <div className={style.card}>
                                        
                                        <h1>{seyyam.title}</h1>
                                        <p>{seyyam.description}</p>
                                    </div>
                                    <img src={seyyam.img} alt="" />
                                </div>
                           
                        </div>
                         ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SimpleSlider;