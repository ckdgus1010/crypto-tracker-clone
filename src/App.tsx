import { ThemeProvider } from "./contexts/ThemeContext";
import FontLoader from "./components/commons/FontLoader";
import { GlobalStyle } from "./styles/GlobalStyle";
import Router from "./routes/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
    return (
        <ThemeProvider>
            <FontLoader />
            <GlobalStyle />
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>
    );
}

export default App;
