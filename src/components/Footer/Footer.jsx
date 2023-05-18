// imgs
import logo from '../../img/header/logo.png'
import phone from '../../img/header/phone.png'
import bag from '../../img/header/bag.png'
// 
import { NavLink} from "react-router-dom";
import { useTranslation } from 'react-i18next';

import './Footer.scss'







export const Footer=()=>{
    const {t,i18n}=useTranslation();

    const changeLanguage=(lang)=>{
        i18n.changeLanguage(lang);
    }


    return(
        <div>
          <div className="footer ">
          <div className="footer__inner container">

                <div className="footer__logo">
                    <img src={logo} alt="logo" />
                    <h1>WOMAZING</h1>
                </div>

                <div className="footer__nav">

                  <li className="footer__item">
                        <NavLink className="footer__link" to="/" href="#">{t("header.link1")}</NavLink>
                  </li>  

                  <li className="footer__item">
                        <NavLink className="footer__link" to="/shop" href="#">{t("header.link2")}</NavLink>
                  </li> 

                  <li className="footer__item">
                        <NavLink className="footer__link" to="/brands" href="#">{t("header.link3")}</NavLink>
                  </li> 

                  <li className="footer__item">
                        <NavLink className="footer__link" to="/contact" href="#">{t("header.link4")}</NavLink>
                  </li>   
                       
                </div>

                <div className="footer__contact">
                    <img src={phone} alt="phone" />
                     <a href="tel:+7 (495) 823-54-12">+7 (495) 823-54-12</a>
                     
                        
                    
                </div>

              
                
            

          </div>


          </div>
    
    </div>
    )
}