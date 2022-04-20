import React, { useState } from 'react'
import Datepick from './Datepick'
function Home() {
    const [showsearch, setshowsearch] = useState(false)
    return (
        <div className="home">
            <div className="banner_search">
                
                <button onClick={()=>setshowsearch(!showsearch)}>{showsearch?'Hide':'Search Dates' }</button>
                {
                    showsearch && <Datepick/>
                }
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a differnt type of gateway to uncover the real gems around world</h5>
                
                <button>Explore</button>
            
            </div>
            
            
        </div>
    )
}

export default Home
 


