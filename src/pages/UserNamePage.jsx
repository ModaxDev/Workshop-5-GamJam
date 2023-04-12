import UserNameInput from '../components/UserNameInput.jsx'
import React, { useState, useEffect } from 'react';

export const UserNamePage = ({setIsPseudo}) => {
  const [Username, setUsername] = useState("Joueur 1");

  const onSubmit = async (data) => {
    setUsername(data?.username);
    const res = await fetch("/api/InsertPseudo", { method: "POST", body: JSON.stringify(data?.username) });
    const resultat = await res.json();
    setIsPseudo(true)
  };
  
return(
    <>
        <h2 className="input-title">Votre pseudo : {Username}</h2>
        <UserNameInput onSubmit = {(data) => onSubmit(data)}/>
    </>
  )
}

export default UserNamePage;
