import React, { useState } from "react";
// import "../css/App.scss";
// import "../css/MediaQuery.scss";
import { API_KEY, API_BASE_URL } from "../config/config";
import WeatherList from "./WeatherList";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../themes/global";
import { lightTheme, darkTheme } from "../themes/theme";
import NavBar from "./NavBar";
import UseFetch from "../hooks/UseFetch";

const App = () => {
  const { data, error, isLoading, setUrl } = UseFetch();
  // console.log(data);

  const [theme, setTheme] = useState("light");
  const [tempType, setTempType] = useState("F");
  const [colorF, setColorF] = useState("orange");
  const [colorC, setColorC] = useState("");

  const setCelcius = () => {
    setTempType("C");
    setColorC("orange");
    setColorF("");
  };
  const setFahrenheit = () => {
    setTempType("F");
    setColorC("");
    setColorF("orange");
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const displayContent = () => {
    if (error)
      return (
        <h3 style={{ textAlign: "center" }}>Error while fetching: {error}</h3>
      );
    if (!data && isLoading)
      return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    if (!data) return null;
    return (
      <WeatherList weathers={data.list} city={data.city} tempType={tempType} />
    );
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <header>
          <NavBar
            themeToggler={toggleTheme}
            search={(city) => {
              setUrl(
                `${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}&units=imperial`
              );
            }}
            celcius={setCelcius}
            fahrenheit={setFahrenheit}
            colF={colorF}
            colC={colorC}
          />
        </header>
        <main>{displayContent()}</main>
        <footer>
          <p>
            by:
            <a
              href="https://emmanuel-mireku.github.io"
              target="_blank"
              style={{ color: "red" }}
              rel="noreferrer noopener"
            >
              {" "}
              Emmanuel Mireku
            </a>
          </p>
        </footer>
      </>
    </ThemeProvider>
  );
};
export default App;
