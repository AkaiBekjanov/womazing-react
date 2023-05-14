import { ImportantCard } from "./ImportantCard";
import img1 from '../../../img/important/quality 1.png';
import img2 from '../../../img/important/Frame 16.png';
import img3 from '../../../img/important/Frame 17.png';
import { useTranslation } from "react-i18next";
import './Important.scss';


export const Important=()=>{
    const {t}=useTranslation();

    return(
     <section className="important container" >
          <h2 className="important__title">{t("important.title")}</h2>

          <div className="important__cards">
            <ImportantCard img={img1} title={t("important.first.title")} text={t("important.first.text")}/>
            <ImportantCard img={img2} title={t("important.second.title")} text={t("important.second.text")}/>
            <ImportantCard img={img3} title={t("important.three.title")} text={t("important.three.text")}/>
          </div>
          
     </section>
    )
}