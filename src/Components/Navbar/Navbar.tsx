import { useState, useEffect } from "react";
import style from "./Navbar.module.scss";
import img1 from "../../Assets/img1.png";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";



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

  return (
    <div className={style.back}>
      
      <div className={style.navbar}>
        <div className={style.logoContainer}>
          <div className={style.clock}>
            {formattedTime}
          </div>
          <img className={style.logo} src={img1} alt="logo" />
          <h1 className={style.h1}>SEYYAM INTERNATIONAL GROUP</h1>
        </div>
        
        <nav className={`${style.nav} ${isMenuOpen ? style.activeMenu : ""}`}>
          <ul onClick={toggleMenu} className={style.active}>
            <a href="#">{t("home")}</a>
          </ul>
          <ul onClick={toggleMenu} className={style.active}>
            <a href="#Service">{t("services")}</a>
          </ul>
          <ul onClick={toggleMenu} className={style.active}>
            <a href="#Collection">{t("about_us")}</a>
          </ul>
          <ul onClick={toggleMenu} className={style.active}>
            <a href="#Seyyam">{t("projects")}</a>
          </ul>
          <ul onClick={toggleMenu} className={style.active}>
            <a href="#Fotter">{t("contacts")}</a>
          </ul>
        </nav>
        
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
