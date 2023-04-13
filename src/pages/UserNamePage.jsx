import UserNameInput from '../components/UserNameInput.js'
import React from 'react';
import { useAppContext } from "../context/context.js"

export const UserNamePage = ({setIsPseudo}) => {
  const { pseudo, setpseudo } = useAppContext();


  const onSubmit = async (data) => {
    setpseudo(data.username);
    setIsPseudo(true)
  };
  
return(
    <>
        <UserNameInput onSubmit = {(data) => onSubmit(data)}/>
    </>
  )
}

export default UserNamePage;
