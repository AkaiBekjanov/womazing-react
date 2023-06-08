import "./Shop.scss";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { CustomContext } from "./../../Context";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "antd/dist/reset.css";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

export const Shop = () => {
  const { t } = useTranslation();
  const { page, setPage, shop, status, setStatus, user, color, setColor } =
    useContext(CustomContext);
  const [sort, setSort] = useState("");

  const showCount = shop
      .filter((item) => (status === "all" ? item : status === item.category))
      .filter((item, ind) => {
        return ind < page * 9 && ind >= page * 9 - 9;
      }).length,
    showCountsLength = shop.filter((item) =>
      status === "all" ? item : status === item.category
    ).length;

  return (
    <section className="shop">
      <div className="shop__inner container">
        <h1 className="shop__title">Магазин</h1>
        <Link className="shop__link">Главная </Link>-
        <span style={{ color: "#6E9C9F" }}> Контакты</span>
        <ul className="shop__list">
          <li
            onClick={() => {
              setPage(1);
              setStatus("all");
            }}
            className={`shop__item ${status === "all" && "shop__item_active"}`}
          >
            {t("shop.all")}
          </li>
          <li
            onClick={() => {
              setPage(1);
              setStatus("sportsuit");
            }}
            className={`shop__item ${
              status === "sportsuit" && "shop__item_active"
            }`}
          >
            {t("shop.suit")}
          </li>
          <li
            onClick={() => {
              setPage(1);
              setStatus("sweatshirt");
            }}
            className={`shop__item ${
              status === "sweatshirt" && "shop__item_active"
            }`}
          >
            {t("shop.sweatshirt")}
          </li>
          <li
            onClick={() => {
              setPage(1);
              setStatus("tshort");
            }}
            className={`shop__item ${
              status === "tshort" && "shop__item_active"
            }`}
          >
            {t("shop.tshort")}
          </li>
          <li
            onClick={() => {
              setPage(1);
              setStatus("hoody");
            }}
            className={`shop__item ${
              status === "hoody" && "shop__item_active"
            }`}
          >
            {t("shop.hoody")}
          </li>
        </ul>
        <div className="shop__sort-content">
          <div className="shop__sort-type">
            {sort ? (
              <h3 className="shop__sort-title">
                {t("shop.sortTitle")} <span>{sort}</span>
              </h3>
            ) : (
              ""
            )}
            <div className="shop__sorts">
              <button
                type="btn"
                className={`shop__sort ${sort === "big" ? "active" : ""}`}
                onClick={() => setSort("big" !== sort ? "big" : "")}
              >
                {t("shop.big")}
              </button>
              <button
                type="btn"
                className={`shop__sort ${sort === "less" ? "active" : ""}`}
                onClick={() => setSort("less" !== sort ? "less" : "")}
              >
                {t("shop.less")}
              </button>
              <button
                type="btn"
                className={`shop__sort ${sort === "discount" ? "active" : ""}`}
                onClick={() => setSort("discount" !== sort ? "discount" : "")}
              >
                {t("shop.discount")}
              </button>
            </div>
          </div>
        </div>
        <p>
          Показано {showCount} товаров из {showCountsLength}
        </p>
        <div className="shop__row">
          {shop
            .sort((a, b) => {
              if (sort === "big") {
                return (b.priceSale || b.price) - (a.priceSale || a.price);
              } else if (sort === "less") {
                return (a.priceSale || a.price) - (b.priceSale || b.price);
              }
            })
            .filter((item) => {
              if (status === "all") {
                return item;
              } else {
                return status === item.category;
              }
            })
            .filter((item, ind) => {
              return ind < page * 9 && ind >= page * 9 - 9;
            })
            .map((item) => {
              return (
                <div className="shop__card">
                  <Link className="shop__card-link" to={`/product/${item.id}`}>
                    <LazyLoadImage
                      className="shop__card-img"
                      alt="t-short"
                      src={`../${item.image.black}`}
                      effect="blur"
                    />
                  </Link>

                  <h3 className="shop__card-title">{item.title}</h3>
                  <p className="shop__card-price">
                    $
                    {item.priceSale ? (
                      <>
                        <span style={{ textDecoration: "line-through" }}>
                          {item.price}
                        </span>
                        -
                        <span className="shop__card-price-sale">
                          ${item.priceSale}
                        </span>
                      </>
                    ) : (
                      item.price
                    )}
                  </p>
                  <p className="shop__card-instock">
                    {item.inStock ? (
                      <span>В наличии : {<span>{item.inStock}</span>}</span>
                    ) : (
                      <span>нет в наличии</span>
                    )}
                  </p>
                </div>
              );
            })}
        </div>
        <p>
          Показано {showCount} товаров из {showCountsLength}
        </p>
        {shop.filter((item) =>
          status === "all" ? item : item.category === status
        ).length > 9 ? (
          <Pagination
            simple
            onChange={setPage}
            current={page}
            total={
              shop.filter((item) =>
                status === "all" ? item : status === item.category
              ).length
            }
            pageSize={9}
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
