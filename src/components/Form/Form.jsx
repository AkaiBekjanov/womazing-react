import React, { useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useForm}  from "react-hook-form";
import axios from 'axios';
import { CustomContext } from './../../Context';

export const Form=()=>{
    const location = useLocation();
    const {registerUser,loginUser}=useContext(CustomContext);
   
    const {
        register,setError:{errors},handleSubmit,reset
    }=useForm({mode:"onBlur"});

   

   
    const submit=(data)=>{
        location.pathname === '/register' ? registerUser(data) : loginUser(data);
            
            
    }


    return (<form className="form" onSubmit={handleSubmit(submit)}>
    <h2 className="form__title">
        {location.pathname === '/login' ? "Вход в аккаунт"
         : "Регистрация"    
    }
    
    </h2>

    <input 
        
       type="email" placeholder="Введите email" 
       className="form__label"
       {...register("email",{
        required:"Введите email"
       })}
       />

    {
        location.pathname === '/register' &&
        <>
          <input     {...register("login",{
                          required:"Введите login"
                     })}
                         type="text" placeholder="Введите login" 
                         className="form__label"
                     />

           <input 
                     {...register("number",{
                          required:"Введите номер"
                         })}
                     type="text" placeholder="Введите номер" 
                     className="form__label"
                     />   

        </>
    }

    <input
       {...register("password",{
        required:{
            message:"Введите password",
            value:true
        }
       })}
       type="password" placeholder="Введите пароль" 
       className="form__label"
       
       />
       
    

    <button className="form__btn" type="submit" >
        {location.pathname === '/login' ? "Войти"
             : "Зарегистрироваться"    
         }
    </button>

    <p>
        {
            location.pathname === '/login' ? 
            <>
             
             <Link to="/register"> Создать аккаунт </Link>
            </>
            :
           <>  
           Есть аккаунт ? 
           <Link to="/login"> Войдите</Link>
          
           </>
        }
    </p>
   </form>)

}