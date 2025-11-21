import { createContext } from "react";    
import {doctors } from '../assets/assets';
export const APPContext = createContext(null);    
const APPContextProvider = ({children}) => {
    const value ={
  doctors
    }
    return (
      <APPContext.Provider value={value}>
        {children}
      </APPContext.Provider>
    );
}
    export default APPContextProvider;