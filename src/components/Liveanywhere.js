import React from 'react'
import { NavLink } from 'react-router-dom'

function Liveanywhere() {
    const data = [
        {
            img: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720",
            title: "Outdoor getaways"
        },
        {
            img: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720",
            title: "Unique stays"
        }
        ,
        {
            img: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720",
            title: "Entire homes"
        },
        {
            img: "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720",
            title: "Pets allowed"
        }
    ]
    return (
        <div className="liveany">
            <div className="container">
                <div className="ltitle">
                    <h2>Live anywhere</h2>
                </div>
                <div className="row">
                    {
                        data.map((val, i) => {
                            return <div className="col-md-3 my-3 liveanycard">
                                <NavLink to="/list">
                                    <img src={val.img} className="img-fluid" />
                                    <h4>{val.title}</h4>
                                </NavLink>
                            </div>
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default Liveanywhere
