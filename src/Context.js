import React ,{createContext,useEffect,useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from 'axios';


export const CustomContext=createContext();


export const Context=(props)=>{

    const [user,setUser]=useState({email:""});
    const [cart, setCart] = useState([]);


    const addCart = (product) => {
        let idx = cart.findIndex(item => item.id === product.id && item.color === product.color && item.size === product.size);
        if (idx >= 0) {
            setCart(cart.map(item => {
                if (item.id === product.id && item.color === product.color && item.size === product.size) {
                    return {...item, count: +item.count + +product.count}
                } else {
                    return item
                }
            }))
        } else {
            setCart([...cart, product]);
        }
    };

    const updateCart = (id, color, size, count) => {
        setCart(cart.map(item => {
            if (item.id === id && item.color === color && item.size === size) {
                return {...item, count: count}
            } else {
                return item
            }
        }))
    };

    const deleteCart = (id, color, size) => {
        setCart(cart.filter((item) => {
            return item.id !== id || item.color !== color || item.size !== size
        }))
    };



    const navigate=useNavigate();

    const [page, setPage] = useState(1);

    const [status, setStatus] = useState('all');

    const [shop, setShop] = useState([]);

    const [ticket, setTicket] = useState([]);


    const [color, setColor] = useState("black");
    const [product, setProduct] = useState();

   

    const logout=()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("cart");

        setUser({email:""})
    }
   
   
  

    const getAllClothes = () => {
        axios('http://localhost:5555/clothes')
            .then(({data}) => setShop(data) )
    };


    const registerUser = (data) => {
        axios.post('http://localhost:5555/register', {...data, orders: []})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
          
                setUser(res.data.user);
                navigate('/')
            })
    };

    const loginUser = (data) => {
        axios.post('http://localhost:5555/login', data)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
          
                setUser(res.data.user);
                navigate('/')
            })
    };

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

        if (localStorage.getItem('cart') !== null) {
            setCart(JSON.parse(localStorage.getItem('cart')))

        }
        getAllClothes()
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user.orders]);

    const value={
        user,
        setUser,
        loginUser,
        registerUser,
        logout,
        status,
        setStatus,
        setColor,
        color,
        page,

        setPage,
        shop,
        cart,
        setCart,
        addCart,
        deleteCart,
        updateCart,
        product, 
        setProduct,
        ticket,
         setTicket

    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}