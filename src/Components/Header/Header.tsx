import styles from './Header.module.scss';
import { SlArrowDown } from "react-icons/sl";
import video1 from '../../assets/video1.mp4';
import { useEffect, useState } from "react";
import { useHeader } from "./hook/useHeader";

const Header = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft()); // Изначальное состояние для времени до конца месяца

    // Функция для расчёта времени до конца месяца
    function calculateTimeLeft() {
        const now = new Date();
        const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1); // Первое число следующего месяца
        const difference = nextMonth - now;

        const timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };

        return timeLeft;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
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

    return (
        <div className={styles.header}>
            <video className={styles.video} autoPlay loop muted playsInline onError={handleVideoError}>
                <source src={video1} type="video/mp4" />
            </video>
            <div className={styles.text}>
                <div>
                    {header?.map((header) => (
                        <div key={header.id}>
                            <h1>{header.title}</h1>
                        </div>
                    ))}

                    {/* Обратный отсчет до конца месяца */}
                    <div className={styles.countdown}>
                        <h2 className={styles.timer}>
                            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                        </h2>
                    </div>

                    <SlArrowDown color="white" size={90} onClick={scrollToSection} style={{ cursor: "pointer" }} />
                </div>
            </div>
        </div>
    );
};

export default Header;
