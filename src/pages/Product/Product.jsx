import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./Product.scss";
import { CustomContext } from "../../Context";
import { Footer } from "../../components/Footer/Footer";
import { Slider } from "./Slider";

export const Product = () => {
  const params = useParams();

  const [count, setCount] = useState(1);
  const location = useLocation();

  const [color, setColor] = useState("black");
  const [size, setSize] = useState();
  const { shop, setPage, product, setProduct, setStatus, addCart } =
    useContext(CustomContext);

  useEffect(() => {
    axios.get(`http://localhost:5555/clothes/${params.id}`).then((res) => {
      setProduct(res.data);
    });
  }, [shop, location]);

  return (
    <div className="product">
      <div className="container">
        <h1 className="product__title">{product?.title}</h1>
        <div className="product__nav">
          <span>Главная </span>—
          <Link
            to="/shop"
            onClick={() => {
              setPage(1);
              setStatus(product.category);
            }}
          >
            Свитшоты
          </Link>
          —<span style={{ color: "#909090" }}> {product?.title}</span>
        </div>
        <div className="product__content">
          <div className="product__img">
            <img src={`../${product?.image[color]}`} alt={product?.title} />
          </div>

          <div className="product__info">
            <h2 className="product__price">
              {product?.priceSale ? (
                <>
                  ${product?.price}{" "}
                  {
                    <span className="product__price-sale">
                      ${product?.priceSale}
                    </span>
                  }
                </>
              ) : (
                <>${product?.price}</>
              )}
            </h2>

            <div className="product__select">
              <h4 className="product__select-title">Выберите размер</h4>
              <div className="product__sizes">
                {product?.size.map((x) => (
                  <div
                    style={{
                      backgroundColor: size === x ? "black" : "",
                      color: size === x ? "white" : "",
                    }}
                    onClick={() => setSize(size != x ? x : "")}
                    className="product__size"
                  >
                    {x}
                  </div>
                ))}
              </div>
              <div className="product__color-choice">
                <h4 className="product__select-title">Выберите цвет</h4>

                <div className="product__colors">
                  {product?.colors?.map((item) => {
                    return (
                      <div
                        onClick={() => setColor(item)}
                        className="product__color"
                        style={{
                          background: item,

                          border:
                            item === "white"
                              ? "0.2px solid #000"
                              : "" || item === color
                              ? "2.3px solid #000000"
                              : "",
                        }}
                      ></div>
                    );
                  })}
                  {product?.inStock ? (
                    <p className="product__quantity">
                      В наличии : <span>{product.inStock}</span>
                    </p>
                  ) : (
                    <p className="product__content-choose">Нет в наличии !</p>
                  )}
                </div>
              </div>
            </div>

            <div className="product__cart">
              <input
                style={{ color: !product?.inStock ? "grey" : "black" }}
                disabled={!product?.inStock}
                min="1"
                max={product?.inStock}
                value={count}
                onChange={(e) =>
                  setCount(
                    e.target.value >= product?.inStock
                      ? product?.inStock
                      : e.target.value
                  )
                }
                type="number"
                className="product__number"
              />

              <button
                className="product__btn"
                disabled={!product?.inStock}
                onClick={() => {
                  addCart({
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    color,
                    size,
                    count,
                    category: product.category,

                    price: product.price || product.priceSale,
                  });
                }}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>

        <h2
          className="product__title"
          style={{ fontSize: "40px", marginBottom: "67px" }}
        >
          Связанные товары
        </h2>
        <Slider product={product} />
      </div>
      <Footer />
    </div>
  );
};
