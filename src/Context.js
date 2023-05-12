import React ,{createContext,useEffect,useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from 'axios';


export const CustomContext=createContext();


export const Context=(props)=>{

    const [user,setUser]=useState({email:""});
    const navigate=useNavigate();
   

   
    const registerUser = async (data) => {
        await axios.post('http://localhost:5555/register',{...data,orders:[]})
            .then((res) => {
                setUser(res.data.user);
                 localStorage.setItem("user",JSON.stringify(
                    res.data.user
                 ))
                 navigate("/");
            });
    };

    const loginUser = async (data) => {
        await axios.post('http://localhost:5555/login',{...data,orders:[]})
            .then((res) => {
               
                setUser(res.data.user);
                 localStorage.setItem("user",JSON.stringify(
                    res.data.user
                ))
                 navigate("/");
            })
            .error(err=>console.log(err))
    };

    const logout=()=>{
        localStorage.removeItem("user");
        setUser({email:""})
    }
   
   
    const value={
        user,
        setUser,
        loginUser,
        registerUser,
        logout
    }

    useEffect(()=>{
        if(localStorage.getItem("user") != null){
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    },[])
    useEffect(()=>{
       
            localStorage.setItem("user",JSON.stringify(user));
       
    },[])
    


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}