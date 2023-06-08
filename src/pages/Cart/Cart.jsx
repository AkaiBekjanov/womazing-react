import React, { useContext } from "react";
import "./Cart.scss";
import { CustomContext } from "./../../Context";
import { CartItem } from "./CartItem";
import axios from "axios";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, setCart, ticket, setTicket } = useContext(CustomContext);
  const useTicket = (e) => {
    e.preventDefault();
    axios(`http://localhost:8080/tickets?title=${e.target[0].value}`).then(
      ({ data }) => {
        if (data.length) {
          setTicket(data);
        } else {
          setTicket("Такого купона не существует!!!");
        }
      }
    );
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__title">Корзина</div>
        <div className="cart__nav">
          Корзина — <span>Корзина</span>
        </div>

        {cart.length ? (
          cart.map((item, idx) => {
            return <CartItem key={idx} item={item} />;
          })
        ) : (
          <h1 style={{ marginTop: "50px" }}>Ваша корзина заказов пуста!</h1>
        )}

        <form className="cart__form" onSubmit={useTicket}>
          <div className="cart__coupon">
            <input className="cart__input" placeholder="Введите купон" />
            <button className="cart__btn">Применить купон</button>
          </div>
          <div className="cart__item cart__item-cart">
            <button className="cart__btn" onClick={() => setCart([])}>
              Очистить корзину
            </button>
          </div>
        </form>
        {Array.isArray(ticket) && ticket.length ? (
          <h3 style={{ marginTop: "20px" }}>
            По данному промокоду вы получили скидку в размере{" "}
            {ticket[0].discount} %
          </h3>
        ) : ticket.length ? (
          <h3 style={{ marginTop: "20px" }}>{ticket}</h3>
        ) : (
          ""
        )}
        <br />
        <br />
        <br />
        <div className="">
          Подытог ${cart.reduce((acc, cur) => acc + cur.count * cur.price, 0)}
        </div>
        <button className="cart__pay-btn1">
          Итого{" "}
          <span>
            $
            {Array.isArray(ticket) && ticket.length
              ? cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) -
                (cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) /
                  100) *
                  ticket[0].discount
              : cart.reduce((acc, rec) => acc + rec.count * rec.price, 0)}{" "}
          </span>
        </button>
        <Link to="/checkout">
          <button className="cart__pay-btn2">Оформить заказ</button>
        </Link>
      </div>
    </div>
  );
};
