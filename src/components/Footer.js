import React from 'react'
import {  AiFillFacebook, AiFillInstagram,AiFillTwitterSquare } from "react-icons/ai";
function Footer() {
    return (
        <div className="footer">
            <div className="footone">
                <ol>
                    <li>© 2021 bnb, Inc.</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Company details</li>
                </ol>
      

            </div>
            <div className="foottwo">
            <ol>
                    <li><AiFillFacebook/></li>
                    <li><AiFillInstagram/> </li>
                    <li><AiFillTwitterSquare/></li>
                    
                </ol>

            </div>
            
            
        </div>
    )
}

export default Footer
