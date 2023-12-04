import React, {createContext, PropsWithChildren, useState} from 'react';

type TThemeContext = {theme: 'light' | 'dark', setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>}
export const ThemeContext = createContext< TThemeContext | undefined>(undefined);

export function useAppContext() {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('Use app context within provider!');
  return context;
}

export function ThemeContextProviderWrapper(props: PropsWithChildren<{ defaultTheme: 'light' }>) {
  const [theme, setTheme] = useState<'light' | 'dark'>(props.defaultTheme);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

