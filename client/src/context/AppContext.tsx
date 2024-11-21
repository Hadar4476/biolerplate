import { createContext, useContext, useState, ReactNode } from "react";

interface AppLoadedContextProps {
  isAppLoadedd: boolean;
  setAppLoaded: (loaded: boolean) => void;
}

const AppLoadedContext = createContext<AppLoadedContextProps | undefined>(
  undefined
);

interface AppLoadedProviderProps {
  children: ReactNode;
}

export const AppLoadedProvider = ({ children }: AppLoadedProviderProps) => {
  const [isAppLoadedd, setIsAppLoaded] = useState(false);

  const setAppLoaded = (loaded: boolean) => {
    setIsAppLoaded(loaded);
  };

  return (
    <AppLoadedContext.Provider value={{ isAppLoadedd, setAppLoaded }}>
      {children}
    </AppLoadedContext.Provider>
  );
};

export const useAppLoaded = () => {
  const context = useContext(AppLoadedContext);
  if (!context) {
    throw new Error("useAppLoaded must be used within an AppLoadedProvider");
  }
  return context;
};

// USAGE IN COMPONENTS:
// const { isAppLoaded, setAppLoaded } = useAppLoaded();
