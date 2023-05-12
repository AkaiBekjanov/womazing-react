// imgs
import logo from '../../img/header/logo.png'
import phone from '../../img/header/phone.png'
import bag from '../../img/header/bag.png'
// 
import { NavLink,Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../Context';
import { useContext } from 'react';

export const Header=()=>{
    const {user,logout}=useContext(CustomContext);
    const {t,i18n}=useTranslation();

    const changeLanguage=(lang)=>{
        i18n.changeLanguage(lang);
    }
 

    return(
        <div className="header">
        <div className="container">
            <div className="header__inner">
                <div className="header__logo">
                    <img src={logo} alt="logo" />
                    <h1>WOMAZING</h1>
                </div>

                <div className="header__nav">

                  <li className="header__item">
                        <NavLink className="header__link" to="/" href="#">{t("header.link1")}</NavLink>
                  </li>  

                  <li className="header__item">
                        <NavLink className="header__link" to="/shop" href="#">{t("header.link2")}</NavLink>
                  </li> 

                  <li className="header__item">
                        <NavLink className="header__link" to="/brands" href="#">{t("header.link3")}</NavLink>
                  </li> 

                  <li className="header__item">
                        <NavLink className="header__link" to="/contact" href="#">{t("header.link4")}</NavLink>
                  </li>   
                       
                </div>

                <div className="header__contact">
                    <img src={phone} alt="phone" />
                     <a href="tel:+7 (495) 823-54-12">+7 (495) 823-54-12</a>
                     <div>
                        <span onClick={()=>changeLanguage("ru")}>
                            RU
                        </span>
                        -------
                        <span  onClick={()=>changeLanguage("eng")}>
                            ENG
                        </span>
                    </div>
                </div>
                

                <div className="header__shopping-bag">
                    <img src={bag} alt="bag" />
                </div>

                
                {user?.email?.length 
                                   ? <Link to="/" onClick={logout}>Выйти</Link>
                                   :   <Link to="/login">Войти</Link>}

          </div>


        </div>
        </div>
    )
}