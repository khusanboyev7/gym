import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import ManagerRoutes from "./routes/ManagerRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ManagerRoutes />
    </ThemeProvider>
  );
}

export default App;
