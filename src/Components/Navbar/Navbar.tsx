import { useState, useEffect } from "react";
import style from "./Navbar.module.scss";
import img1 from "../../Assets/img1.png";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { IoIosPhonePortrait } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date()); // Состояние для текущего времени
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // Обновление времени каждую секунду
    }, 1000);

    return () => clearInterval(timer); // Очистка таймера при размонтировании
  }, []);

  // Форматирование времени
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  // Функция для плавного скролла
  const smoothScrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Закрываем меню после выбора
    }
  };

  return (
    <div className={style.back}>

      <div className={style.navbar}>
        <div className={style.logoContainer}>
          <div className={style.clock}>
            {formattedTime}
          </div>
          <img className={style.logo} src={img1} alt="logo" />
        </div>

        <nav className={`${style.nav} ${isMenuOpen ? style.activeMenu : ""}`}>
          <ul onClick={() => smoothScrollTo("Header")} className={style.active}>
            <a>{t("home")}</a>
          </ul>
          <ul onClick={() => smoothScrollTo("Service")} className={style.active}>
            <a>{t("services")}</a>
          </ul>
          <ul onClick={() => smoothScrollTo("Seyyam")} className={style.active}>
            <a>{t("about_us")}</a>
          </ul>
          <ul onClick={() => smoothScrollTo("Project")} className={style.active}>
            <a>{t("projects")}</a>
          </ul>
          <ul onClick={() => smoothScrollTo("Fotter")} className={style.active}>
            <a>{t("contacts")}</a>
          </ul>
        </nav>

        <div className={style.phone}>
          <IoIosPhonePortrait color="white" size="30px" />
          <a className={style.phoneLink} href="tel:+998909876543">+998 90 987 65 43</a>
        </div>

        <select
          className={style.languageSwitch}
          name="inter"
          id="inter"
          onChange={(event) => changeLanguage(event.target.value)}
          defaultValue={localStorage.getItem("i18nextLng") || "uz"}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>

        <div className={style.burgerIcon} onClick={toggleMenu}>
          <FaBars />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
