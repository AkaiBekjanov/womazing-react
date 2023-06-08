import { useTranslation } from "react-i18next";

// imgs
import heroImg1 from "../../../img/hero/hero__img1.jpg";
import heroImg2 from "../../../img/hero/hero__img2.jpg";
import heroImg3 from "../../../img/hero/hero__img3.jpg";
import "./Hero.scss";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__sectionOne">
          <div className="hero__content">
            <h1 className="hero__title">{t("hero.firstSection.title")}</h1>

            <p className="hero__text">{t("hero.firstSection.text")}</p>

            <div className="hero__btn">
              <div className="hero__btn--img">
                <svg
                  width="16"
                  height="29"
                  viewBox="0 0 16 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108"
                    stroke="#6E9C9F"
                  />
                </svg>
              </div>
              <div className="hero__btn--text">
                {t("hero.firstSection.btn")}
              </div>
            </div>
          </div>

          <div className="hero__images">
            <img src={heroImg3} className="hero__image3" alt="hero-img" />
            <img src={heroImg2} className="hero__image1" alt="hero-img" />
            <img src={heroImg1} className="hero__image2" alt="hero-img" />
            <div className="hero__rectangle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
