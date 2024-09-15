import React, { useState } from "react";
import style from "./Navbar.module.scss";
import img1 from "../../Assets/img1.png";
import { FaBars } from "react-icons/fa"; // Используем иконку из react-icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.back}>
      <div className={style.navbar}>
        <img className={style.logo} src={img1} alt="logo" />
        <nav className={`${style.nav} ${isMenuOpen ? style.activeMenu : ""}`}>
          <ul className={style.active}>Главная</ul>
          <ul className={style.active}>Услуги</ul>
          <ul className={style.active}>О нас</ul>
          <ul className={style.active}>Проекты</ul>
          <ul className={style.active}>Контакты</ul>
        </nav>
        <div className={style.burgerIcon} onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
