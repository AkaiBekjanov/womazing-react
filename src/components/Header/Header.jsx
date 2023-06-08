// imgs
import logo from "../../img/header/logo.png";
import phone from "../../img/header/phone.png";
import bag from "../../img/header/bag.png";
//
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CustomContext } from "../../Context";
import { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";

export const Header = () => {
  const { user, logout, cart } = useContext(CustomContext);
  const { t, i18n } = useTranslation();
  const [burger, setBurger] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <img src={logo} alt="logo" />
            <h1>WOMAZING</h1>
          </div>

          <div className={`header__nav ${burger ? "header__nav_active" : ""} `}>
            <li className="header__item">
              <NavLink className="header__link" to="/" href="#">
                {t("header.link1")}
              </NavLink>
            </li>

            <li className="header__item">
              <NavLink className="header__link" to="/shop" href="#">
                {t("header.link2")}
              </NavLink>
            </li>

            <li className="header__item">
              <NavLink className="header__link" to="/brands" href="#">
                {t("header.link3")}
              </NavLink>
            </li>

            <li className="header__item">
              <NavLink className="header__link" to="/contact" href="#">
                {t("header.link4")}
              </NavLink>
            </li>
          </div>

          <div className="header__contact">
            <img src={phone} alt="phone" />
            <a href="tel:+7 (495) 823-54-12">+7 (495) 823-54-12</a>
          </div>

          <div className="header__language-btns">
            <button onClick={() => changeLanguage("ru")}>RU</button>

            <button onClick={() => changeLanguage("eng")}>ENG</button>
          </div>

          <div className="header__shopping-bag">
            <Link to="/cart">
              <img src={bag} alt="bag" />
              <span style={{ background: cart.length ? "#998E78" : "" }}>
                {cart.length || ""}
              </span>
            </Link>
          </div>

          {user?.email?.length ? (
            <NavLink className="header__user" to="profile">
              <FaUser />
            </NavLink>
          ) : (
            ""
          )}
          {user?.email?.length ? (
            <Link to="/" onClick={logout} className="header__sign-in">
              Выйти
            </Link>
          ) : (
            <Link to="/login" className="header__sign-in">
              Войти
            </Link>
          )}
          <div
            className={`burger ${burger ? "burger_active" : ""}`}
            onClick={() => setBurger(!burger)}
          >
            <span className="burger__line"></span>
          </div>
        </div>
      </div>
      <div
        onClick={() => setBurger(false)}
        className={`overlay ${burger ? "overlay_active" : ""}`}
      ></div>
    </div>
  );
};
