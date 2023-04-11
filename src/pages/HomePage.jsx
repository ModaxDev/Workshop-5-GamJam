import React, { useState, useEffect } from "react";

export const HomePage = () => {
  return (
    <>
      <h1 className="input-title">React Couleur</h1>
      <h2>Choisis le mode de jeu : </h2>
      <div class="row">
        <div class="col-sm">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">One color</h5>
              <h6 className="card-subtitle">Niveau de difficulté : facile</h6>
              <p className="card-text">
                Lorsque l'écran change de couleur, cliques le plus rapidement
                possible.
              </p>
              <a href="/games/1" className="card-link">
                Lancer le jeu
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Multiple colors</h5>
              <h6 className="card-subtitle">Niveau de difficulté : facile</h6>
              <p className="card-text">
                Lorsque la bonne couleur apparaît, cliques le plus rapidement
                possible.
              </p>
              <a href="/games/2" className="card-link">
                Lancer le jeu
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
