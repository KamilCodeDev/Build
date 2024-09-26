import style from "./Section.module.scss";
import img3 from "../../Assets/img3.png";
import img11 from "../../assets/img11.webp";
import img12 from "../../assets/img12.webp";

const Section = () => {
    return (
        <div id="section"> 
            <div className={style.section}>
                <div className={style.card}>
                    <img  src={img3} alt="" />
                    <p className={style.text}>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed vulputate</p>
                </div> 
                <div className={style.card}>
                    <img src={img11} alt="" />
                    <p className={style.text}>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed vulputate</p>
                </div> 
                <div className={style.card}>
                    <img src={img12} alt="" />
                    <p className={style.text}>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed vulputate</p>
                </div> 
            </div>
        </div>
    );
}

export default Section;
