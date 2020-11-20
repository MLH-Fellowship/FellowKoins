import React from "react";
import { Link } from "react-router-dom";
import ThemeBox from "./ThemeBox";
import { GlobalStyles } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./Themes";
import { useTheme } from "./useTheme";
import { ThemeProvider } from "styled-components";

function Navbar() {
  const [theme, setMode] = useTheme();

  const themeMode = () => {
    switch (theme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      default:
        return darkTheme;
    }
  };
  return (
    <ThemeProvider theme={themeMode()}>
      <>
        <GlobalStyles />
        <div>
          <nav
            // className="navbar navbar-expand-lg navbar-light bg-light"
            className={
              "navbar navbar-expand-lg " +
              (theme === "light"
                ? "navbar-light bg-light"
                : "navbar-dark bg-dark")
            }
          >
            <p className="navbar-brand">
              <Link className="nav-link font-weight-bold" to="/">
                <strong style={{ color: "black" }}>FellowKoins</strong>
              </Link>
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link font-weight-bold" to="/fellowboard">
                    FellowBoard
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link font-weight-bold" to="/dashboard">
                    DashBoard
                  </Link>
                </li> */}
              </ul>
            </div>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=MLH-Fellowship&repo=FellowKoins&type=star&count=true&size=large"
              frameborder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
            {/* <iframe
              src="https://ghbtns.com/github-btn.html?user=MLH-Fellowship&repo=FellowKoins&type=fork&count=true&size=large"
              frameborder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
            ></iframe> */}
            <ThemeBox setMode={setMode} />
          </nav>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Navbar;
