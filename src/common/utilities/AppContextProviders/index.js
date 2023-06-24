import ThemeContextProvider from './ThemeContextProvider';
import LocaleContextProvider from './LocaleContextProvide';
import LayoutContextProvider from './LayoutContextProvider';

const AppContextProvider = ({children}) => {
    return (
      <ThemeContextProvider>
        <LocaleContextProvider>
          <LayoutContextProvider>
                {children}
          </LayoutContextProvider>
        </LocaleContextProvider>
      </ThemeContextProvider>
    );
  };
  
  export default AppContextProvider;