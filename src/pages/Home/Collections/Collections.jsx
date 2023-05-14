import { Link } from "react-router-dom";
import img1 from "../../../img/clothes/img1.jpg";
import img2 from "../../../img/clothes/img2.jpg";
import img3 from "../../../img/clothes/img3.jpg";
import { CollectionCard } from './CollectionCard';
import "./Collections.scss"
import { useTranslation } from "react-i18next";

export const Collections=()=>{
    const {t}=useTranslation();
    

    return(
        <div className="collections container" style={{marginTop:"150px"}}>
               <div className="collections__title">
                 {t("collection.title")}
               </div>
               
               <div className="collections__imgs">
                   <CollectionCard img={img1} title={"Футболка Usa "} price={129}/>
                   <CollectionCard img={img2} title={"Купальник Glow"} price={129}/>
                   <CollectionCard img={img3} title={"Свитшот Sweet Shot"} price={129}/>
                  
               </div>
                  
  
               <button className="collections__btn">
                   <Link to="/shop">Открыть магазин</Link>
               </button>
        </div>
       )
   }