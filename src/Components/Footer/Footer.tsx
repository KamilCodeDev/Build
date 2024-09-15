import Container from "../Container/Container"
import style from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.footer}>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1498.4603699410736!2d69.2802796582705!3d41.31058784274514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1726298273320!5m2!1sru!2s" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={style.card}>
                    <div className={style.int}>
                        <div>
                            <p>First Name </p>
                            <input className={style.input} type="text" id="" />
                        </div>
                        <div>
                            <p> Last Name </p>
                            <input className={style.input} type="tel" id="" />
                        </div>
                    </div>
                    <div>
                        <p>E-Mail </p>
                        <input className={style.inputse} type="text" id="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer