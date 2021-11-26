import './App.css'; import "./style/AboutMe.css"; import "./style/contact.css"; import "./style/home.css"; import "./style/MyProject.css"; import "./style/media.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from 'react';
import React from "react"
import Home from "./compenent/Home"
import AboutMe from "./compenent/AboutMe"
import MyProject from "./compenent/MyProject"
import Contact from "./compenent/contact";

function App() {

  const [showLink, setShowLink] = useState(false);
  const handelShowLink = () => {
    setShowLink(!showLink)
  }

  return (
    <Router>
      <nav className={`${showLink ? "showNav" : "hideNav"}`}>
        <button className="nav_button" onClick={handelShowLink}>
          <span></span>
        </button>
        <div className="nav_link">
          <ul>
            <li>
              <Link to="/Contact" className="Link">
                <img className="icon" src="https://img.icons8.com/glyph-neue/25/ffffff/parse-from-clipboard.png" />Contact
              </Link>
            </li>
            <li>
              <Link to="/AboutMe" className="Link">
                <img className="icon" src="https://img.icons8.com/ios-filled/25/ffffff/person-female--v1.png" />A propos de moi
              </Link>
            </li>
            <li>
              <Link to="/MyProject" className="Link">
                <img className="icon" src="https://img.icons8.com/ios-filled/25/ffffff/ms-project.png" />Mes projet
              </Link>
            </li>
          </ul>
          <div>
            <a href="https://github.com/mer-s-h?tab=repositories" target="_blank">
            <img src="assets/github.png" alt="github" className="nav_img"/>
            </a>
            <a href="https://www.linkedin.com/in/meriem-hadi-680120223/" target="_blank">
            <img src="assets/linkdin.png" alt="linkdin" className="nav_img"/>
            </a>
          </div>
        </div>
      </nav>



      {/* <nav>
        <Menu>
          <SubMenu icon={<img src="https://img.icons8.com/material-outlined/48/ffffff/list.png" />}>
            <div className="menue">
              <Link to="/Contact" className="Link">
                <MenuItem><img className="icon" src="https://img.icons8.com/glyph-neue/25/ffffff/parse-from-clipboard.png" />Contact</MenuItem>
              </Link>
              <Link to="/AboutMe" className="Link">
                <MenuItem><img className="icon" src="https://img.icons8.com/ios-filled/25/ffffff/person-female--v1.png" />a propos de moi</MenuItem>
              </Link>
              <Link to="/MyProject" className="Link">
                <MenuItem><img className="icon" src="https://img.icons8.com/ios-filled/25/ffffff/ms-project.png" />mes projet</MenuItem>
              </Link>
            </div>
          </SubMenu>
        </Menu>
      </nav> */}

      <header>
        <div id="head">
          <p className="nom">Meriem</p>
          <img id="moi" src="moi.jpg" alt="c'est moi" />
          <p className="nom">Hadi</p>
        </div>
        <div className="media-nom">
          <p>Meriem</p>
          <p>Hadi</p>
        </div>
      </header>



      {/* <div className="App"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cv" element={<Cv />} /> */}
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/MyProject" element={<MyProject />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      {/* </div > */}

    </Router>

  );
}

export default App;