import UserNameInput from "../components/UserNameInput.jsx";
import React, { useState, useEffect } from "react";

export const UserNamePage = ({ setIsPseudo }) => {
  const [Username, setUsername] = useState("Joueur 1");

  const onSubmit = async (data) => {
    setUsername(data?.username);
    const res = await fetch("/api/InsertPseudo", {
      method: "POST",
      body: JSON.stringify(data?.username),
    });
    const resultat = await res.json();
    setIsPseudo(true);
  };

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
        <h1
          style={{
            "font-family": "Luckiest Guy, cursive",
            "font-size": "70px",
          }}
        >
          React Couleur
        </h1>
        <h2
          className="input-title"
          style={{
            "font-family": "Concert One, cursive",
            "margin-bottom": "50px",
          }}
        >
          Quel est ton pseudo ? {Username}
        </h2>
        <UserNameInput onSubmit={(data) => onSubmit(data)} />
      </body>
    </>
  );
};

export default UserNamePage;
