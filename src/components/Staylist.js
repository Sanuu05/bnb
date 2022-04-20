import React, { useState } from 'react'
import list from './List'
import { AiFillStar } from "react-icons/ai";
import Map from './Map'
import Maplist from './Maplist'
function Staylist() {
    console.log('ll', list)
    const[instbook, setinstbook] = useState(false)
    const[fprice, setfprice] = useState(false)
    const[eplace, seteplace] = useState(false)
    const[cflex, setcflex] = useState(false)
    const [momap, setmomap] = useState(false)
    return (
        <div className="staylist">
            <div className="row">
                <div className="col-md-7 staylistmain order-md-0 order-1" onClick={()=>setmomap(false)}>
                    
               
            <div className="row">
                <div className="col-12 stayone">
                    <div className="title">
                        <p>{list.length}+ stays</p>
                        <h2>Outdoor getaways</h2>

                    </div>
                    <div className=" col-12 filterbtn">
                        <button className={instbook?'factive':null} onClick={()=>setinstbook(!instbook)}>Instant Book</button>
                        <button className={fprice?'factive':null} onClick={()=>setfprice(!fprice)}>Price</button>
                        <button className={eplace?'factive':null} onClick={()=>seteplace(!eplace)}>Entire Place</button>
                        <button className={cflex?'factive':null} onClick={()=>setcflex(!cflex)}>Cancellation Flexibility</button>
                    </div>
                </div>
            </div>
            <div className="row staytwo">
                {
                    Maplist.map((val, i) => {
                        return <div className="col-md-12 col-12 staytwosub">
                            <div className="row">
                                <div className="col-md-4 col-12 staylistimg">
                                    <img src={val.img} className="img-fluid" />
                                </div>
                                <div className="col-md-8 col-12 homedetails">
                                    <div className="top ">
                                        <p>{val.location}</p>
                                        <h2>{val.title}</h2>
                                        <p>{val.description}</p>

                                    </div>

                                    <div className="below">
                                        <p><AiFillStar/> <span>4.95</span>(35 reviews)</p>
                                        <h4><span>{val.price}</span></h4>

                                    </div>
                                </div>
                            </div>


                        </div>
                    })
                }

            </div>
            </div>
            <div className={momap?"col-md-5 staythree staythreeextra order-md-1 order-0":"col-md-5 staythree  order-md-1 order-0"}  onClick={()=>setmomap(true)}>
                <Map />
            </div>
            </div>

        </div>
    )
}

export default Staylist
