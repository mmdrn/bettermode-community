import { createContext, useContext, ReactNode, useState } from "react";
import Cookies from "js-cookie";

type Theme = "light" | "dark";
interface GlobalContextType {
  theme: Theme;
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: Theme) => void;
}

const GlobalContext = createContext<GlobalContextType>({
  theme: "light",
  setTheme: () => {},
});

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const savedTheme = Cookies.get("theme") as Theme;
  const [theme, setTheme] = useState<Theme>(savedTheme || import.meta.env.VITE_DEFAULT_THEME);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      Cookies.set("theme", newTheme);
      setTheme(newTheme);
    },
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

// Custom hook to consume global context
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
