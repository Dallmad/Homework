import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR} className={`${s.link} ${s.button}`} >Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={`${s.link} ${s.button}`}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR2} className={`${s.link} ${s.button}`}>Junior+</NavLink>


        </div>
    )
}

export default Header
