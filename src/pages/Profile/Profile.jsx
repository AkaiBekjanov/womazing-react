import { useContext, useRef, useState } from "react";
import "./Profile.scss";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { CustomContext } from "../../Context";
import axios from "axios";

export const Profile = () => {
  const [selected, setSelected] = useState("history");
  const { user, setUser } = useContext(CustomContext);
  const [userDataChange, setUserDataChange] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);

  const {
    reset,
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  const password = useRef();
  password.current = watch("password", "");
  console.log(user);

  const changeUser = (data) => {
    axios
      .patch(`http://localhost:5555/users/${user.id}`, data)
      .then(({ data }) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        setUserDataChange(false);
      });
  };

  const changePassword = (data) => {
    axios
      .patch(`http://localhost:5555/users/${user.id}`, {
        password: data.password,
      })
      .then(() => setPasswordChange(false));
  };

  return (
    <div className="profile">
      <div className="container">
        <div className="profile__top">
          <div className="profile__top-left">
            <h1 className="profile__title">Мой аккаунт</h1>

            <div className="profile__nav">
              Главная - <span style={{ color: "" }}>Профиль</span>
            </div>
          </div>
          <div className="profile__top-right">
            <button
              className="profile__btn"
              style={{
                backgroundColor: selected === "history" ? "#6E9C9F" : "",
                color: selected === "history" ? "#FFF" : "#000",
              }}
              onClick={() => setSelected("history")}
            >
              История заказов
            </button>
            <button
              className="profile__btn"
              style={{
                backgroundColor: selected === "setting" ? "#6E9C9F" : "",
                color: selected === "setting" ? "#FFF" : "#000",
              }}
              onClick={() => setSelected("setting")}
            >
              Настройки
            </button>
          </div>
        </div>

        {selected === "setting" && (
          <>
            <div className="profile__content">
              <div className="profile__content-top">
                <h2 className="profile__content-title">Личные данные</h2>
                <div
                  className="profile__btn-change"
                  onClick={() => setUserDataChange((prev) => !prev)}
                >
                  Изменить
                </div>
              </div>
              <form
                className="profile__content-bottom"
                onSubmit={handleSubmit(changeUser)}
              >
                <div className="profile__content-info">
                  <div className="profile__content-item">Логин</div>
                  <div className="profile__content-item">
                    {userDataChange ? (
                      <input
                        type="text"
                        className="profile__input"
                        {...register("login")}
                      />
                    ) : (
                      user.login
                    )}
                  </div>
                </div>
                <div className="profile__content-info">
                  <div className="profile__content-item">Номер телефона</div>
                  <div className="profile__content-item">
                    {userDataChange ? (
                      <InputMask
                        mask={`+\\9\\96(999)99-99-99`}
                        type="tel"
                        className="profile__input"
                        {...register("phone")}
                      />
                    ) : (
                      user.number
                    )}
                  </div>
                </div>
                <div className="profile__content-info">
                  <div className="profile__content-item">Почта</div>
                  <div className="profile__content-item">
                    {userDataChange ? (
                      <input
                        type="email"
                        className="profile__input"
                        {...register("email")}
                      />
                    ) : (
                      user.email
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="profile__btn profile__btn-submit"
                  style={{
                    backgroundColor: "#6E9C9F",
                    color: "#FFF",
                  }}
                  onClick={() => setSelected("setting")}
                >
                  Сохранить изменения
                </button>
              </form>
            </div>
            <div className="profile__content" style={{ marginTop: "30px" }}>
              <div className="profile__content-top">
                <h2 className="profile__content-title">Пароль</h2>
                <div
                  className="profile__btn-change"
                  onClick={() => setPasswordChange((prev) => !prev)}
                >
                  Изменить
                </div>
              </div>
              <form
                className="profile__content-bottom"
                onSubmit={handleSubmit(changePassword)}
              >
                {passwordChange ? (
                  <>
                    <div className="profile__content-info">
                      <div className="profile__content-item">Новый пароль</div>
                      <div className="profile__content-item">
                        <input
                          type="password"
                          className="profile__input"
                          {...register("password", {
                            required: "Введите пароль",
                            minLength: {
                              value: 5,
                              message:
                                "Password must have at least 5 characters",
                            },
                          })}
                        />
                        {errors?.password && <p>{errors?.password?.message}</p>}
                      </div>
                    </div>
                    <div className="profile__content-info">
                      <div className="profile__content-item">
                        Подтвердите пароль
                      </div>
                      <div className="profile__content-item">
                        <input
                          type="password"
                          className="profile__input"
                          {...register("confirmPassword", {
                            validate: (value) =>
                              value === password.current ||
                              "password do not match",
                          })}
                        />
                        {errors?.confirmPassword && (
                          <p>{errors?.confirmPassword?.message}</p>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="profile__btn profile__btn-submit"
                      style={{
                        backgroundColor: "#6E9C9F",
                        color: "#FFF",
                      }}
                      onClick={() => setSelected("setting")}
                    >
                      Сохранить изменения
                    </button>
                  </>
                ) : (
                  ""
                )}
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
