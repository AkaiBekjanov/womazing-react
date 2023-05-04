import {BrowserRouter,Routes,Route, useLocation} from "react-router-dom";



import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";
import { Shop } from "../pages/Shop/Shop";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Brands } from "../pages/Brands/Brands";
import { NotFound } from "../pages/NotFound/NotFound";

export const Layot=()=>{
    const location=useLocation();
    return (
        <>
            <Header />
            <Routes>
                 <Route  path="/" element={<Home />}/>
                 <Route  path="/contact" element={<Contact />}/>
                 <Route  path="/shop" element={<Shop />}/>
                 <Route  path="/brands" element={<Brands />}/>
                 <Route  path="*" element={<NotFound />}/>
            </Routes>
          {
            location.pathname === "/" 
            || location.pathname === "/contact" 
            || location.pathname === "/shop" 
            || location.pathname === "/brands" 
            ? <Footer  /> :""
          }
        
        </>
    )
}