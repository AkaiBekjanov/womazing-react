
import { useTranslation } from 'react-i18next';
import img1 from '../../../img/clothes/img1.jpg';
import img2 from '../../../img/clothes/img2.jpg';
import img3 from '../../../img/clothes/img3.jpg';
import { CollectionCard } from './CollectionCard';
import "./Collections.scss"
import { Link } from 'react-router-dom';


export const Collections=()=>{
    const {t}=useTranslation();


    return(
        <div className="collections container" style={{marginTop:"150px"}}>
               <div className="collections__title">
                 {t("collection.title")}
               </div>
               <div className="collections__imgs">
                  <CollectionCard img={img1} title={t("collection.first.title")} price={t("collection.first.price")}  />
                  <CollectionCard img={img2} title={t("collection.second.title")} price={t("collection.second.price")}  />
                  <CollectionCard img={img3} title={t("collection.three.title")} price={t("collection.three.price")}  />
               </div>
                  
        
              
               <button className="collections__btn">
                   <Link to="/shop" >{t("collection.btn")}</Link>
               </button>
        </div>
       )
   }