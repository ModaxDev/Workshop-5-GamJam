import UserNameInput from './UserNameInput.jsx'
import React, { useState, useEffect } from 'react';

export const UserNamePage = () => {
  const [Username, setUsername] = useState("Joueur 1");

  const onSubmit = data => {
    console.log(data?.username);
    setUsername(data?.username);
  };
return(
    <>
        <h2 className="input-title">{Username}</h2>
        <UserNameInput onSubmit = {(data) => onSubmit(data)}/>
    </>
  )
}

export default UserNamePage;
