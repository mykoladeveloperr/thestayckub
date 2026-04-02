import './Header.scss';
import logo from '../../assets/logo.svg'
import Drawer from '../Drawer/Drawer';
import React from 'react'

export default function Header () {
    const [drawerOpen, setDrawerOpen] = React.useState(false)

    function drawerToggleHandler () {
        setDrawerOpen((prevState)=> (!prevState))
    }

    return (
        <header className='header'>
            <div className="container">
                <div className="header__inner">
                    <a href="" className="header__logo">
                        <img src={logo} alt="" />
                    </a>
                    <div className="header__menu">
                        <nav className="menu">
                            <a href="" className="menu__item link">Universities</a>
                            <a href="" className="menu__item link">Study abroad providers</a>
                            <a href="" className="menu__item link">Language schools</a>
                            <a href="" className="menu__item link">Corporate / relocation partners</a>
                            <a href="" className="menu__item link">Group bookings</a>
                        </nav>
                    </div>
                    <div className="header__button">
                        <a href="" className="btn btn-light rounded-pill">Request Availability</a>
                    </div>
                    <div className="header__burger">
                        <button className="burger" onClick={drawerToggleHandler}>
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                </div>

            </div>
            <div className="header__drawer">
                <Drawer isOpen={drawerOpen} drawerToggleHandler={drawerToggleHandler}></Drawer>
            </div>
        </header>
    )
}