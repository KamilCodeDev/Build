import { useState, useEffect } from "react";
import style from "./Navbar.module.scss";
import img1 from "../../Assets/img1.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto"; 
    };
  }, []);

  return (
    <div className={style.back}>
      <div className={style.navbar}>
        <div className={style.logoContainer}>
          <img className={style.logo} src={img1} alt="logo" />
          <h1 className={style.h1}>SEYYAM INTERNATIONAL GROUP</h1>
        </div>
        <nav className={`${style.nav} ${isMenuOpen ? style.activeMenu : ""}`}>
          <ul onClick={toggleMenu} className={style.active}><a href="#">Главная</a></ul>
          <ul onClick={toggleMenu} className={style.active}><a href="#Service">Услуги</a></ul>
          <ul onClick={toggleMenu} className={style.active}><a href="#Collection">О нас</a></ul>
          <ul onClick={toggleMenu} className={style.active}><a href="#Seyyam">Проекты</a></ul>
          <ul onClick={toggleMenu} className={style.active}><a href="#Fotter">Контакты</a></ul>
        </nav>
        <div className={style.burgerIcon} onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
