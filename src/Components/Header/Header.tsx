import styles from './Header.module.scss';
import { SlArrowDown } from "react-icons/sl";
import video1 from '../../assets/video1.mp4';
import { useEffect } from "react";
import { IHeader, useHeader } from "./hook/useHeader";
import { useTranslation } from 'react-i18next';
import img1 from "../../assets/img1.png";  // Логотип
import Aos from "aos";
import 'aos/dist/aos.css';

const Header = () => {
    const { i18n } = useTranslation();
    
    useEffect(() => {
        Aos.init({
            duration: 500,
            easing: 'ease-in-out',
        });
    }, []);

    const { data: header = [] } = useHeader();  // По умолчанию пустой массив

    const handleVideoError = () => {
        console.error("Ошибка загрузки видео.");
    };

    const scrollToSection = () => {
        const section = document.getElementById("Service");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const renderTitle = (headerItem: IHeader) => {
        switch (i18n.language) {
            case 'ru':
                return headerItem.title_ru;
            case 'uz':
                return headerItem.title_uz;
            case 'en':
            default:
                return headerItem.title_en;
        }
    };

    return (
        <div data-aos="fade-up" id='Header'>
            <div className={styles.header}>
                <video className={styles.video} autoPlay loop muted playsInline onError={handleVideoError}>
                    <source src={video1} type="video/mp4" />
                </video>

                {/* Логотип в верхнем левом углу */}
                <div className={styles.logoWrapper}>
                </div>

                <div className={styles.text}>
                    <div>
                        {header.map((headerItem) => (
                            <div key={headerItem.id}>
                                <h1 className={styles.title}>{renderTitle(headerItem)}</h1>
                            </div>
                        ))}
                        <SlArrowDown color="white" size={90} onClick={scrollToSection} style={{ cursor: "pointer" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
