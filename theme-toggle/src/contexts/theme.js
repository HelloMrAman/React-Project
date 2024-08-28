import { createContext, useContext } from "react";

// create context for theme
export const ThemeContext = createContext({
    themeMode: "light", //variable, default theme 
    darkTheme: () => {}, //method
    lightTheme: () => {}, //method
})

export const ThemeProvider = ThemeContext.Provider;

//Creatng custom hook to export themecontext as single
export default function useTheme(){
    return useContext(ThemeContext);
}