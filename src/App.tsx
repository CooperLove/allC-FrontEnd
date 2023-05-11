import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/chakra/theme.ts";
import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./reducers/counterSlice";
// import { RootState } from "./store/index.ts";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const LoginPage = lazy(() => import("./pages/LoginPage.tsx"));
const HomePage = lazy(() => import("./pages/HomePage.tsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage.tsx"));

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Suspense>
      <footer className="footer">v1.0</footer>
    </ChakraProvider>
  );
}

export default App;

{
  /* 
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  <div className="App container mt-5 text-center">
  <h2 className="mb-3">React Js Redux Store with Slice State Examle</h2>
  <p className="h1">{count}</p>
  <button
    onClick={() => {
      dispatch(increment());
    }}
    className="me-2 btn btn-primary"
  >
    Increment
  </button>
  <button
    onClick={() => {
      dispatch(decrement());
    }}
    className="me-2 btn btn-danger"
  >
    Decrement
  </button>
</div>; */
}
