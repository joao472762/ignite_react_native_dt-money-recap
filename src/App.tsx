import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./context/TransactionsContext";
import { GlobalStyles } from "./global/styles/global";
import { defaultTheme } from "./global/styles/theme";
import { Home } from "./pages/Home";

export function App(){
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <TransactionsProvider>
        <Home/>
      </TransactionsProvider>
    </ThemeProvider>
  )
}