

import './Home.scss'


import { Hero } from './Hero/Hero';
import { Collections } from './Collections/Collections';
import { Important } from './Important/Important';



export const Home=()=>{

    return (<>
          <Hero />
          <Collections />
          <Important />
    </>)
}