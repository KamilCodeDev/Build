import { useState, useEffect } from "react";
import style from "./Navbar.module.scss";
import img1 from "../../Assets/img1.png";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import call from "../../assets/calling_bg_white.png"

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

  const smoothScrollTo = (sectionId: string, offset: number = 150) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className={style.back}>

      <div className={style.navbar}>
        <div className={style.logoContainer}>
          <div className={style.clock}>
            {formattedTime}
          </div>
        </div>
        <img src={img1} alt="Логотип" className={style.logo} />
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
          <ul onClick={() => smoothScrollTo("Collection")} className={style.active}>
            <a>{t("gallery")}</a>
          </ul>
          <ul onClick={() => smoothScrollTo("Contact")} className={style.active}>
            <a>{t("contacts")}</a>
          </ul>
        </nav>

        <div className={style.phone}>
        {/* <PiPhoneCall color="white" size={30} /> */}
        {/* <FiPhone color="white" size={30} /> */}
        <img src={call} alt="" />
          <a className={style.phoneLink} href="tel:+998954433000">+998 95 443 30 00</a>
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
