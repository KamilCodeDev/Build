import styles from './Header.module.scss';
import { SlArrowDown } from "react-icons/sl";
import video1 from '../../assets/video1.mp4'

const Header = () => {
    const handleVideoError = () => {
        console.error("Ошибка загрузки видео.");
    };

    return (
        <div className={styles.header}>
            <video className={styles.video} autoPlay loop muted playsInline  onError={handleVideoError}>
                <source src={video1} type="video/mp4" />
            </video>    
            <div className={styles.text}>
                <div>
                    <h1>ЛИДЕРЫ В ОБЛАСТИ КАЧЕСТВЕННОГО СТРОИТЕЛЬСТВА</h1>
                    <SlArrowDown color="white" size={90} />
                </div>
            </div>
        </div>
    );
};

export default Header;
