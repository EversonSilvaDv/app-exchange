import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { green } from "@mui/material/colors";

interface IThemeContext {
  themeName: 'light' | 'dark';
  handleTheme: () => void;
}

interface IColorTheme {
  main: string;
  secondary: string;
}

const ThemeContext = createContext({} as IThemeContext);

const AppThemeProvider: React.FC = ({ children }) => {

  const [ themeName, setThemeName ] = useState<'light' | 'dark'>('light');
  const [ colorTheme, setColorTheme ] = useState<IColorTheme>({} as IColorTheme);

  const colors = createTheme({
    palette: {
      primary: {
        main: '#770000',
        
      },
      secondary: {
        main: '#aa0000',
      },
      mode: themeName,
    }
  });

  const handleTheme = useCallback(() => {
    setThemeName(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        handleTheme
      }}
    >
      <ThemeProvider theme={colors}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

export { AppThemeProvider, useAppThemeContext };