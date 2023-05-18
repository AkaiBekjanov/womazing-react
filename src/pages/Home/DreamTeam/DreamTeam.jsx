// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import img1 from '../../../img/team/adam-winger-fI-TKWjKYls-unsplash 3.jpg';
import img2 from '../../../img/team/omar-lopez-T6zu4jFhVwg-unsplash 1.jpg';
import img3 from '../../../img/team/simon-maage-tXiMrX3Gc-g-unsplash 2.jpg';


import './DreamTeam.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';



export const DreamTeam=()=>{
    

    return(
     <div className="team container">
          <h2 className="team__title">Команда мечты Womazing</h2>
          <div className="team__content">
          <Swiper
      // install Swiper modules
      pagination={
                 {clickable: true}
             }
             cssMode={true}
             navigation={true}
             loop={true}
             autoPlay={true}
    
             spaceBetween={30}
             autoplay={ {delay: 3000}}
             modules={[Navigation, Pagination,  Autoplay]}
             speed={3000}
           
           
             >
               <SwiperSlide>
                  <LazyLoadImage src={img1}  alt={`img1`}/>
               </SwiperSlide>

               <SwiperSlide>
                   <LazyLoadImage src={img2}  alt={`img2`}/>
               </SwiperSlide>

               <SwiperSlide>
                     <LazyLoadImage src={img3}  alt={`img3`}/>
               </SwiperSlide>

             

             </Swiper>

             <div className="team__right">
                <h2 className="team__right__title">Для каждой</h2>
                <p className="team__right__text">
                    Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                </p>
                <p className="team__right__text">
                    Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.
                </p>
                <Link to="/brands" className="team__right__btn">Подробнее о бренде</Link>
             </div>
          </div>
     </div>
    )
}