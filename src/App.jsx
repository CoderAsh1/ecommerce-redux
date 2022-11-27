import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
          <div className="mode-btn">
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              color="inherit"
            >
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
