import { useContext, useState, createContext, ReactNode } from 'react';


const LoadingContext = createContext({
  preloader: false,
  setPreLoader: (loading) => undefined,
});

export const LoadingProvider = ({ children }) => {
  const [preloader, setPreLoader] = useState(false);
  return (
    <LoadingContext.Provider
      value={{
        preloader,
        setPreLoader,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
}

export function useIsLoading() {
  const context = useLoading();
  return context.preloader;
}
