import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

export const HomePage = () => {
  return (
    <>
      <body
        style={{
          "background-color": "#0075E1",
          height: "100%",
          color: "white",
          textAlign: "center",
          padding: "60px",
        }}
      >
        <span
          style={{
            "font-family": "'Dongle', sans-serif",
            "font-size": "30px",
            "font-weight": "800",
          }}
        >
          Bienvenue nomUtilisateur !
        </span>
        <h1
          style={{
            "font-family": "Luckiest Guy, cursive",
            "font-size": "70px",
          }}
        >
          React Couleur
        </h1>
        <h2
          style={{
            "font-family": "Concert One, cursive",
            "margin-bottom": "50px",
          }}
        >
          Choisis le mode de jeu :{" "}
        </h2>
        <section style={{ display: "inline-flex" }}>
          <div class="col-sm" style={{ margin: "0px 20px" }}>
            <div
              className="card"
              style={{ width: "280px", height: "295px", color: "#424242" }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    "font-family": "Luckiest Guy, cursive",
                    "font-size": "30px",
                  }}
                >
                  One color
                </h5>
                <h6
                  className="card-subtitle"
                  style={{
                    "font-family": "'Dongle', sans-serif",
                    "font-size": "30px",
                    "font-weight": "800",
                  }}
                >
                  Niveau de difficulté : facile
                </h6>
                <p
                  className="card-text"
                  style={{
                    "font-family": "'Dongle', sans-serif",
                    "font-size": "28px",
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
                      "font-family": "Luckiest Guy, cursive",
                      "font-size": "17px",
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
              className="card"
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
                    "font-family": "Luckiest Guy, cursive",
                    "font-size": "30px",
                  }}
                >
                  Multiple colors
                </h5>
                <h6
                  className="card-subtitle"
                  style={{
                    "font-family": "'Dongle', sans-serif",
                    "font-size": "30px",
                    "font-weight": "800",
                  }}
                >
                  Niveau de difficulté : facile
                </h6>
                <p
                  className="card-text"
                  style={{
                    "font-family": "'Dongle', sans-serif",
                    "font-size": "28px",
                    margin: "10px 0px 30px",
                    "line-height": "25px",
                    "font-weight": "300",
                  }}
                >
                  Lorsque la bonne couleur apparaît, cliques le plus rapidement
                  possible.
                </p>
                <a href="/games/2" className="card-link">
                  <button
                    type="button"
                    className="btn"
                    style={{
                      backgroundColor: "#FF7E20",
                      color: "white",
                      "font-family": "Luckiest Guy, cursive",
                      "font-size": "17px",
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
                  "font-family": "Concert One, cursive",
                  "font-size": "20px",
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
