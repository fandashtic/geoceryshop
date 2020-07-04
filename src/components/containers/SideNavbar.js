import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/fandashtic-logo-full.svg';
import Context from "store/context";
import {routes} from 'routes/_nav';

const SideNavbar = () => {
    const [sideMenu, setSideMenu] = useState(false);
    const { state, dispatch } = useContext(Context);

    async function sideMenuBtn(){
        setSideMenu(!sideMenu)
        dispatch({ type: "MENU_TOGGLE", payload: sideMenu });
    }

    return (
        <>
            <nav id="sidebar" className={state.isSideNavMenu ? "sidebar" : "sidebar toggled"}>
                <div className="sidebar-content ">
                    <Link to="/dashboard" className="sidebar-brand" >
                        <img src={logo} />
                    </Link>
                    <ul className="sidebar-nav">
                        {
                             routes
                             .map((route,key) => {
                                if (route.menu === 'main') {
                                    return (
                                        <li key ={key} className="sidebar-item">
                                            <Link to={route.path} className="sidebar-link">
                                                <i className={route.icon} /> <span className="align-middle">{route.name}</span>
                                            </Link>
                                        </li>
                                    )
                                }
                            })
                        }
                        <li className="sidebar-item">
                            <Link to="#" data-toggle="collapse" onClick={() => sideMenuBtn()} className={state.isSideToggle ? "sidebar-link" : "sidebar-link collapsed"} aria-expanded={state.isSideToggle}>
                                <i className="align-middle  fas fa-fw fa-cube " /> <span className="align-middle">Master</span>
                            </Link>
                            <ul className={state.isSideToggle ? "sidebar-dropdown list-unstyled show " : "sidebar-dropdown list-unstyled collapse "} data-parent="#sidebar">
                                {
                                    routes
                                    .map((route,key) => {
                                        if (route.menu === 'master') {
                                            return (
                                                <li key ={key} className="sidebar-item">
                                                    <Link to={route.path} className="sidebar-link">
                                                        <i className={route.icon} /> <span className="align-middle">{route.name}</span>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default SideNavbar
