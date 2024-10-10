import style from "./Section.module.scss";
import img24 from "../../Assets/img24.png";
import img25 from "../../assets/img25.png";
import img26 from "../../assets/img26.png";
import { useTranslation } from 'react-i18next'; // Импорт хука для перевода
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Section = () => {
    const { t } = useTranslation(); // Используем функцию t для перевода

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
                    <img src={img24} alt="" />
                    <h1>{t('title')}</h1> {/* Перевод заголовка первой карточки */}
                    <p className={style.text}>{t('section')}</p> {/* Перевод текста первой карточки */}
                </div> 
                <div className={style.card}>
                    <img src={img25} alt="" />
                    <h1>{t('title')}</h1> {/* Перевод заголовка второй карточки */}
                    <p className={style.text}>{t('section')}</p> {/* Перевод текста второй карточки */}
                </div> 
                <div className={style.card}>
                    <img src={img26} alt="" />
                    <h1>{t('title')}</h1> {/* Перевод заголовка третьей карточки */}
                    <p className={style.text}>{t('section')}</p> {/* Перевод текста третьей карточки */}
                </div> 
            </div>
        </div>
    );
}

export default Section;
