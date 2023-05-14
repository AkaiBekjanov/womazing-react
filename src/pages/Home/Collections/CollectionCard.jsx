import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import 'react-lazy-load-image-component/src/effects/blur.css';

export const CollectionCard=({img,title,price})=>{
    

    return(
     <div className="collection" >
          <div className="collection__img">
                 <Link to="/shop"> 
                  <LazyLoadImage 
                     alt={title}
                     src={img}
                     effect="blur"
                     
                  />


                 <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M0 12H31M31 12L20.186 1M31 12L20.186 23" stroke="white"/>
                 </svg>
                 <div className="overlay-bg"></div>
                 </Link>
          </div>

          <h4 className="collection__title">{title}</h4>

          <div className="collection__price">${price}</div>

          
     </div>
    )
}