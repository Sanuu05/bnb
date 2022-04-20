import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { BsPeopleFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
function Datepick() {
    const [startdate, setstartdate] = useState(new Date())
    const [enddate, setenddate] = useState(new Date())
    const selectionRange = {
        startDate:startdate,
        endDate:enddate,
        key:'selection',
    };
    function handleSelect(ranges){
        setstartdate(ranges.selection.startDate)
        setenddate(ranges.selection.endDate)
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
      }

    return (
        <div className="datepick">
             <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <h2>Number of guests  <BsPeopleFill/></h2>
      <input min={0} defaultValue={2} type="number" />
      <NavLink to='/list'><button className="datebtn">Search</button></NavLink>
      
        </div>
    )
}

export default Datepick
