import style from "./Seyyam.module.scss"
import Slider from "react-slick";
import img4 from "../../assets/img4.jpg"
function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="container">
                    <div className={style.slider}>
                        <div className={style.card}>
                            <h1>Our goal then and now is to provide quality on time projects</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>
                        </div>
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className={style.slider}>
                        <div className={style.card}>
                            <h1>Our goal then and now is to provide quality on time projects</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>
                        </div>
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className={style.slider}>
                        <div className={style.card}>
                            <h1>Our goal then and now is to provide quality on time projects</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>
                        </div>
                        <img src={img4} alt="" />
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;