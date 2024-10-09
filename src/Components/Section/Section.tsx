import style from "./Section.module.scss";
import img24 from "../../Assets/img24.png";
import img25 from "../../assets/img25.png";
import img26 from "../../assets/img26.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Section = () => {

    useEffect(() => {
        Aos.init({
            duration: 500,
            easing: 'ease-in-out',
        });
    }, []);


    return (
        <div data-aos="fade-up" id="section"> 
            <div className={style.section}>
                <div className={style.card}>
                    <img  src={img24} alt="" />
                    <p className={style.text}>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed vulputate</p>
                </div> 
                <div className={style.card}>
                    <img src={img25} alt="" />
                    <p className={style.text}>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed vulputate</p>
                </div> 
                <div className={style.card}>
                    <img src={img26} alt="" />
                    <p className={style.text}>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed vulputate</p>
                </div> 
            </div>
        </div>
    );
}

export default Section;
