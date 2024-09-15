import style from  "./Section.module.scss"
import img3 from "../../Assets/img3.png"
const Section = () => {
    return (
        <div>
            <div className={style.section}>
                <div className={style.card}>
                    <img src={img3} alt="" />
                    <p className={style.text}>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed vulputate</p>
                </div> 
                <div className={style.card}>
                    <img src={img3} alt="" />
                    <p className={style.text}>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed vulputate</p>
                </div> 
                <div className={style.card}>
                    <img src={img3} alt="" />
                    <p className={style.text}>Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor quisbibendum auci elit consequat ipsutis sem nibh id elitsed vulputate</p>
                </div> 
            </div>
        </div>
    )
}

export default Section