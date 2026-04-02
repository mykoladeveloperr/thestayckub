import Menu from "../Menu/Menu";
import './Drawer.scss';

export default function Drawer ({isOpen, drawerToggleHandler}) {
    return (
        <div className={`drawer ${isOpen ? 'drawer--open' : ''}`}>
            <div className="drawer__overlay" onClick={drawerToggleHandler}></div>
            <div className="drawer__panel">
                <div className="drawer__menu">
                    <Menu></Menu>
                </div>
                <div className="drawer__button">
                    <a href="" className="btn btn-primary rounded-pill w-100">Request Availability</a>
                </div>
            </div>
        </div>
    )
}