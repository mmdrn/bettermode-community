import { createContext, useContext, ReactNode, useState } from "react";

type Theme = "light" | "dark";
interface GlobalContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const GlobalContext = createContext<GlobalContextType>({
  theme: "light",
  setTheme: () => {},
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(import.meta.env.VITE_DEFAULT_THEME);

  const value = {
    theme,
    setTheme,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

// Custom hook to consume global context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
