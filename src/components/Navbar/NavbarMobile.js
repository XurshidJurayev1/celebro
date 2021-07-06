import React, { useState } from "react";
import logo from "../../assets/images/icon.png";
import style from "./NavbarMobile.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function NavbarMobile() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [click, setClick] = useState(false);
  if (window.location.pathname.includes("admin")) {
    return null;
  }
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Link to="/">
          <div
            className={style.left}
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </Link>
        <div className={style.right}>
          <h2>(99) 000 7 222</h2>
          {click ? (
            <AiOutlineClose onClick={() => setClick(false)} />
          ) : (
            <AiOutlineMenu onClick={() => setClick(true)} />
          )}
        </div>
      </div>
      <div
        className={
          click
            ? `${style.mobileMenu} ${style.mobileMenuOpen}`
            : `${style.mobileMenu} ${style.mobileMenuClose}`
        }
      >
        <div className={style.content}>
          <div className={style.button}>
            <Link onClick={() => setClick(false)} to="/services">
              {t("navbar.btn")}
            </Link>
          </div>
          <div className={style.btns}>
            <button
              className={i18n.language === "uz" ? style.activeBtn : style.btn}
              onClick={() => {
                changeLanguage("uz");
                setClick(true);
              }}
            >
              UZ
            </button>
            <button
              className={i18n.language === "ru" ? style.activeBtn : style.btn}
              onClick={() => {
                changeLanguage("ru");
                setClick(true);
              }}
            >
              RU
            </button>
          </div>
          <Link onClick={() => setClick(false)} to="/services">
            {t("navbar.link1")}
          </Link>
          <div className={style.subLink}>
            <Link to="/services" onClick={() => setClick(false)}>
              {t("navbar.sublink1")}
            </Link>
            <Link to="/services" onClick={() => setClick(false)}>
              {t("navbar.sublink2")}
            </Link>
            <Link to="/services" onClick={() => setClick(false)}>
              {t("navbar.sublink3")}
            </Link>
            <Link to="/services" onClick={() => setClick(false)}>
              {t("navbar.sublink4")}
            </Link>
            <Link to="/services" onClick={() => setClick(false)}>
              {t("navbar.sublink5")}
            </Link>
          </div>
          <Link onClick={() => setClick(false)} to="/about">
            {t("navbar.link2")}
          </Link>
          <Link to="/orders" onClick={() => setClick(false)}>
            {t("navbar.link3")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;
