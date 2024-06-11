import React from "react";
import appLogo from "./assets/react.svg";
import { TaskList } from "./components/Task1";
import 'bulma/css/bulma.css';
import './App.css';
import './index.css'

function NavMenu() {
    return (
        <div className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="#home">
                    Home
                </a>
                <a className="navbar-item" href="#about">
                    About
                </a>
                <a className="navbar-item" href="#contact">
                    Contact
                </a>
            </div>
        </div>
    );
}

function NavBar() {
    return (
        <header>
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <div className="columns is-vcentered">
                        <a className="navbar-item column" href="/">
                            <img
                                src={appLogo}
                                alt="App Logo"
                                className="image is-64x64"
                            />
                        </a>
                    </div>
                </div>
                <NavMenu />
            </nav>
        </header>
    );
}

function FooterBar() {
    return (
        <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>© Task List 2024 | </strong><a href="#">UPATECo.</a>
          </p>
        </div>
      </footer>
    );
}

function App() {
  return (
    <div className="task-list">
      <NavBar />
      <div className="container">
        <TaskList/>
      </div>
      <FooterBar />
    </div>
  );
}

export default App;