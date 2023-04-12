import { createContext, useState,useContext,useEffect } from "react";

export const GameData = createContext();

function getInitialState() {
  if (typeof window !== 'undefined') {
  const pseudo = localStorage.getItem('pseudo')
  return pseudo ? JSON.parse(pseudo) : []
  }
}

export function Context({ children }) {
    const [pseudo, setpseudo] = useState(getInitialState);
  
    useEffect(() => {
      localStorage.setItem('pseudo', JSON.stringify(pseudo))
    }, [pseudo])
    
    return (
      <GameData.Provider value={{ pseudo, setpseudo }}>
        {children}
      </GameData.Provider>
    );
  }

  export function useAppContext() {
    return useContext(GameData);
  }