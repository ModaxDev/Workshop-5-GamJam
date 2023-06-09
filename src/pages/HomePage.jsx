import React, { useState, useEffect } from "react";
import UserNamePage from "./UserNamePage.jsx";
import styles from "@/styles/Home.module.css";
import { useAppContext } from "../context/context.js"

export const HomePage = () => {
  const [isPseudo, setIsPseudo] = useState(false);
  const { pseudo, setpseudo } = useAppContext();
  return (
    <>
      <body
        style={{
          "backgroundColor": "#0075E1",
          height: "100%",
          color: "white",
          textAlign: "center",
          padding: "60px",
        }}
      >
        <span
          style={{
            fontFamily: "'Dongle', sans-serif",
            fontSize: "30px",
            "font-weight": "800",
          }}
        >
          Bienvenue {pseudo} !
        </span>
        <h1
          style={{
            fontFamily: "Luckiest Guy, cursive",
            fontSize: "70px",
          }}
        >
          React Couleur
        </h1>
        <UserNamePage setIsPseudo = {(bool) => setIsPseudo(bool)}/>
        <h2
          style={{
            fontFamily: "Concert One, cursive",
            "margin-bottom": "50px",
          }}
        >
          Choisis le mode de jeu :{" "}
        </h2>
        <section style={{ display: "inline-flex" }}>
          <div class="col-sm" style={{ margin: "0px 20px" }}>
            <div
              className={isPseudo ? "card" : styles.cardDisabled}
              style={{ width: "280px", height: "295px", color: "#424242" }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontFamily: "Luckiest Guy, cursive",
                    fontSize: "30px",
                  }}
                >
                  One color
                </h5>
                <h6
                  className="card-subtitle"
                  style={{
                    fontFamily: "'Dongle', sans-serif",
                    fontSize: "30px",
                    "font-weight": "800",
                  }}
                >
                  Niveau de difficulté : facile
                </h6>
                <p
                  className="card-text"
                  style={{
                    fontFamily: "'Dongle', sans-serif",
                    fontSize: "28px",
                    margin: "10px 0px 30px",
                    "line-height": "25px",
                    "font-weight": "300",
                  }}
                >
                  Lorsque l'écran change de couleur, cliques le plus rapidement
                  possible.
                </p>
                <a href="/games/1" className="card-link">
                  <button
                    type="button"
                    className="btn"
                    style={{
                      backgroundColor: "#FF207E",
                      color: "white",
                      fontFamily: "Luckiest Guy, cursive",
                      fontSize: "17px",
                      height: "48px",
                      width: "105px",
                    }}
                  >
                    Jouer
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div
              className={isPseudo ? "card" : styles.cardDisabled}
              style={{
                width: "280px",
                height: "295px",
                color: "#424242",
              }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontFamily: "Luckiest Guy, cursive",
                    fontSize: "30px",
                  }}
                >
                  Multiple colors
                </h5>
                <h6
                  className="card-subtitle"
                  style={{
                    fontFamily: "'Dongle', sans-serif",
                    fontSize: "30px",
                    "font-weight": "800",
                  }}
                >
                  Niveau de difficulté : facile
                </h6>
                <p
                  className="card-text"
                  style={{
                    fontFamily: "'Dongle', sans-serif",
                    fontSize: "28px",
                    margin: "10px 0px 30px",
                    "line-height": "25px",
                    "font-weight": "300",
                  }}
                >
                  Lorsque la couleur verte apparaît, cliques le plus rapidement
                  possible.
                </p>
                <a href="/games/2" className="card-link">
                  <button
                    type="button"
                    className="btn"
                    style={{
                      backgroundColor: "#FF7E20",
                      color: "white",
                      fontFamily: "Luckiest Guy, cursive",
                      fontSize: "17px",
                      height: "48px",
                      width: "105px",
                    }}
                  >
                    Jouer
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <a href="/PageTuto">
              <span
                style={{
                  position: "fixed",
                  bottom: "0",
                  right: "0",
                  margin: "25px",
                  fontFamily: "Concert One, cursive",
                  fontSize: "20px",
                }}
              >
                Comment jouer ?
              </span>
            </a>
          </div>
        </section>
      </body>
    </>
  );
};

export default HomePage;
