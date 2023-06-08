import { useContext, useState } from "react";
import { CustomContext } from "../../Context";
import { Link } from "react-router-dom";

export const CartItem = ({ item }) => {
  const { deleteCart, product, updateCart } = useContext(CustomContext);
  const [count, setCount] = useState(item.count);
  return (
    <div className="cart__content">
      <div className="cart__content-nav">
        <div className="cart__item cart__item-product">Товар</div>
        <div className="cart__item ">Цвет</div>
        <div className="cart__item">Цена</div>
        <div className="cart__item">Количество</div>
        <div className="cart__item">Всего</div>
      </div>
      <hr className="cart__line" />
      <div className="cart__content-items">
        <div className="cart__item cart__item-img">
          <span onClick={() => deleteCart(item.id, item.color, item.size)}>
            X
          </span>
          <Link to={`/product/${item.id}`}>
            <img src={item.image.black} alt="" />
          </Link>{" "}
          <span>{item.title}</span>
        </div>
        <div className="cart__item cart__item-color">{item.color}</div>
        <div className="cart__item cart__item-price">
          ${item.price || item.priceSale}
        </div>
        <div className="cart__item cart__item-number">
          <input
            className="cart__content-input"
            min="1"
            value={count}
            onChange={(e) => {
              setCount(
                e.target.value >= product?.inStock
                  ? product?.inStock
                  : e.target.value
              );
              updateCart(item.id, item.color, item.size, e.target.value);
            }}
            type="number"
          />
        </div>
        <div className="cart__item cart__item-count">
          ${+count * item.price}
        </div>
      </div>
    </div>
  );
};
