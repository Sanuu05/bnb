import React, { useState } from 'react'
import list from './List'
function Alllist() {
    const btnlist = ['Treehouses','Beachfont','Shipping container','Tiny homes','Islands','Cabins','Domes']
    const [act,setact] = useState(0)
    return (
        <div className="alllist">
            <div className="px-5">
            
                <div className="row">
                    <div className="col-12 fillink">
                        {
                            btnlist.map((val,i)=>{
                                return <button className={act===i?'active':null} onClick={()=>setact(i)}>{val}</button>
                            })
                        }
                        
                        

                    </div>
                    {
                        list.map((val,i)=>{
                            return  <div className="col-md-3 col-12 alllistcard">
                                <img src={val.pic} className="img-fluid"/>
                                <div className="acdetail">
                                    <p>{val.location}</p>
                                    <h4>₹{val.price}/nights</h4>
                                    </div>
                      
                            </div>
                        })
                    }
                   
                </div>
            </div>
           
        </div>
    )
}

export default Alllist
