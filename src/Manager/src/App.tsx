import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import ManagerRoutes from "./routes/ManagerRoutes";

function MenegerApp() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ManagerRoutes />
    </ThemeProvider>
  );
}

export default MenegerApp;
