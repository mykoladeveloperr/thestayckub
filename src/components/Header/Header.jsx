import "./Header.scss";
import logo from "../../assets/logo.svg";
import Drawer from "../Drawer/Drawer";
import React from "react";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  function drawerToggleHandler() {
    setDrawerOpen((prevState) => !prevState);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="" className="header__logo">
            <img src={logo} alt="" />
          </a>
          <div className="header__menu">
            <nav className="nav">
              <a href="" className="menu__item link">
                Accommodation
              </a>
              <a href="" className="menu__item link">
                Community
              </a>
              <a href="" className="menu__item link">
                Universities
              </a>
              <a href="" className="menu__item link">
                Co-Living
              </a>
              <a href="" className="menu__item link">
                Resources
              </a>
              <a href="" className="menu__item link">
                Get in touch
              </a>
            </nav>
          </div>
          <div className="header__button">
            <a href="#cta" className="btn btn-light rounded-pill header__cta">
              Request Availability
            </a>
          </div>
          <div className="header__burger">
            <button className="burger" onClick={drawerToggleHandler}>
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="header__drawer">
        <Drawer
          isOpen={drawerOpen}
          drawerToggleHandler={drawerToggleHandler}
        ></Drawer>
      </div>
    </header>
  );
}
