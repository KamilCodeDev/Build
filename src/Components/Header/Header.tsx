import styles from './Header.module.scss';
import { SlArrowDown } from "react-icons/sl";
import video1 from '../../assets/video1.mp4';
import { useEffect } from "react";
import { IHeader, useHeader } from "./hook/useHeader";
import { useTranslation } from 'react-i18next';

const Header = () => {
    
    const { i18n } = useTranslation();

    // Функция для обновления текущего времени каждую секунду
    useEffect(() => {
        const timer = setInterval(() => {
       
        }, 1000);

        return () => clearInterval(timer); // Очистка интервала при размонтировании компонента
    }, []);

    const handleVideoError = () => {
        console.error("Ошибка загрузки видео.");
    };

    const scrollToSection = () => {
        const section = document.getElementById("Service");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const { data: header } = useHeader();
    console.log(header);

    const renderTitle = (header: IHeader) => {
        switch (i18n.language) {
          case 'ru':
            return header.title_ru;
          case 'uz':
            return header.title_uz;
          case 'en':
          default:
            return header.title_en;
        }
    };

    return (
        <div id='Header'>

       
        <div className={styles.header}>
            <video className={styles.video} autoPlay loop muted playsInline onError={handleVideoError}>
                <source src={video1} type="video/mp4" />
            </video>
            <div className={styles.text}>
                <div>
                    {header?.map((header) => (
                        <div key={header.id}>
                            <h1 className={styles.title}>{renderTitle(header)}</h1>
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
