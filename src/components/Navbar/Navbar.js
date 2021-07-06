import React from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/images/icon.png";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  if (window.location.pathname.includes("admin")) {
    return null;
  }
  console.log(i18n.language);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Link to="/">
          <div
            className={style.left}
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </Link>
        <div className={style.center}>
          <ul>
            <li>
              <NavLink
                activeStyle={{ borderBottom: "3px solid #8731b8" }}
                to="/services"
              >
                {t("navbar.link1")}
              </NavLink>
              <span></span>
            </li>
            <li>
              <NavLink
                activeStyle={{ borderBottom: "3px solid #8731b8" }}
                to="/about"
              >
                {t("navbar.link2")}
              </NavLink>
              <span></span>
            </li>
            <li>
              <NavLink
                activeStyle={{ borderBottom: "3px solid #8731b8" }}
                to="/orders"
              >
                {t("navbar.link3")}
              </NavLink>
              <span></span>
            </li>
          </ul>
        </div>
        <div className={style.right}>
          <button
            className={i18n.language === "uz" ? style.activeBtn : style.btn}
            onClick={() => changeLanguage("uz")}
          >
            UZ
          </button>
          <button
            className={i18n.language === "ru" ? style.activeBtn : style.btn}
            onClick={() => changeLanguage("ru")}
          >
            RU
          </button>
          <h2>(99) 000 7 222</h2>
          <div className={style.button}>
            <Link to="/services">{t("navbar.btn")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
