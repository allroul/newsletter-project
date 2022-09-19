import React from "react";
import {Outlet, NavLink} from 'react-router-dom';
import '../main.scss'

const Layout = () => {
    const setActive = ({ isActive }) => isActive ? "nav-item-active" : null;
    return (
            <div>
                <div className="header">
                    <div className="container">
                        <nav className="header-wrapper">
                            <div className="nav-item nav-main">
                                <NavLink to={'/'}>Новостник</NavLink>
                            </div>   
                            <ul className="nav-wrapper">
                                <li className="nav-item">
                                    <NavLink to={'/'} className={setActive}>Главная</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/News'} className={setActive}>Новости</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/Contacts'} className={setActive}>Контакты</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>                        
                </div>
                <Outlet />
                <div className="footer">
                    <div className="container">
                        <div className="footer-wrapper">
                            <div className="footer__spa">
                                Новостник 
                                <span>
                                    Single Page Application
                                </span>
                            </div>
                            <div className="footer__title">
                                Дипломный проект
                            </div>
                            <div className="footer__made-by">
                                <span>Made by</span>
                                Alexander Pilipchuk
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
    )
}

export default Layout