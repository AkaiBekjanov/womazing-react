
import './Shop.scss';
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { CustomContext } from './../../Context';
import { motion, AnimatePresence } from "framer-motion";
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'antd/dist/reset.css';
import {Pagination} from 'antd';
import { Link } from 'react-router-dom';



export const Shop=()=>{
    const {t} = useTranslation();
    const {page,setPage,shop,status,setStatus,user,color,setColor}=useContext(CustomContext);
    const [sort, setSort] = useState('');

 

    const showCount = shop.filter(item=>status === "all" ? item : status === item.category).filter((item,ind)=>{
        return ind  < page*9 && ind  >= page*9-9;
      
    }).length,
    showCountsLength = shop.filter(item=>status === "all" ? item : status === item.category).length;

    console.log(shop.length)

  
       
    
    return (<section className="shop">
           <div className="shop__inner container">

                 <h1 className="shop__title">Магазин</h1>
                 <Link className="shop__link">Главная    </Link>
                 -
                 <span style={{color:"#6E9C9F"}}>  Контакты</span>

                 <ul className='shop__list'>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('all')
                    }} className={`shop__item ${status === "all" && 'shop__item_active'}`}>{t('shop.all')}
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('sportsuit')
                    }} className={`shop__item ${status === "sportsuit" && 'shop__item_active'}`}>{t('shop.suit')}
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('sweatshirt')
                    }} className={`shop__item ${status === "sweatshirt" && 'shop__item_active'}`}>{t('shop.sweatshirt')}
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('tshort')
                    }} className={`shop__item ${status === "tshort" && 'shop__item_active'}`}>{t('shop.tshort')}
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('hoody')
                    }} className={`shop__item ${status === "hoody" && 'shop__item_active'}`}>{t('shop.hoody')}
                    </li>
                </ul>

                <p>Показано  {showCount} товаров из {showCountsLength}</p>



                <div className="shop__row">

                    {
                        shop.filter(item=>{
                            if(status === "all"){
                                return item;
                            }else{
                                return status === item.category;
                            }
                        }).filter((item,ind)=>{
                            return ind  < page*9 && ind  >= page*9-9;
                          
                        }).map((item)=>{
                             return (
                                <div className="shop__card">
                                <Link className="shop__card-link" to="/brands">
                                  <LazyLoadImage
                                                        className='shop__card-img'
                                                        alt='t-short'
                                                        src={`../${item.image.black}`}
                                                    
                                                        effect='blur'
                                                    />
                                </Link>
                               
                                 <h3 className='shop__card-title'>{item.title}</h3>
                                 <p className='shop__card-price'>${item.priceSale
                                                    ? <>
                                                        <span style={{textDecoration: 'line-through'}}>{item.price}</span>
                                                        -
                                                        <span className='shop__card-price-sale'>${item.priceSale}</span>
                                                    </>
                                                    : item.price}</p>
                             </div>
                             )
                        })
                    }
                </div>

                  
                <p>Показано  {showCount} товаров из {showCountsLength}</p>
         {
            
             shop.filter(item=>status === "all" ? item : item.category=== status).length > 9 ? 
             <Pagination simple onChange={setPage} current={page} total={shop.filter(item=>status === "all" ? item : status === item.category).length} pageSize={9}/> : ""
         }

              
           </div>
    </section>)
}