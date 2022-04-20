import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import {NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <div className="header">
            <div className="leftheader">
                <NavLink to="/">
                
                <h2>Nestled Inn</h2>

                </NavLink>
                
            </div>
            <div className="centerheader">
                <input type="text" placeholder="Search"/>
                <AiOutlineSearch/>

            </div>
            <div className="rightheader">
                <img src="http://cdn.onlinewebfonts.com/svg/img_561543.png" className="img-fluid"/>
            </div>
            
        </div>
    )
}

export default Navbar
