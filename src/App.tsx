import "./App.css";
import LoginPage from "./pages/LoginPage";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <LoginPage />
      <footer className="footer">v1.0</footer>
    </ChakraProvider>
  );
}

export default App;
