import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../images/p2.jpg'
function secondbanner() {
    return (
        <div className="secondbanner">
        <div className="container">
            <div className="row subsecond">
                <div className="col-md-6 col-12 subsecondtext">
                    <h2>Not sure where<br/> to go? Perfect.</h2>
                 <NavLink to="/alllist"><button>I am Flexible</button></NavLink>   
                </div>
            </div>
            

        </div>
        
    </div>
    )
}

export default secondbanner
