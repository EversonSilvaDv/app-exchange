import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { QuotesContextProvider, AppThemeProvider } from './contexts';
import { SnackbarProvider } from "notistack";
import './App.css';

const App = () => {
  return (
    <>
      <AppThemeProvider>
        <SnackbarProvider>
          <QuotesContextProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </QuotesContextProvider>
        </SnackbarProvider>
      </AppThemeProvider>
    </>
  );
}

export default App;
