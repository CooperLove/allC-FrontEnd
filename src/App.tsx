import "./App.css";
import LoginPage from "./pages/LoginPage";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/chakra/theme.ts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginPage />
      <footer className="footer">v1.0</footer>
    </ChakraProvider>
  );
}

export default App;
