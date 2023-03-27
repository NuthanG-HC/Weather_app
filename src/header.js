import React from "react";
import './header.css'
const Header = ()=>{
    return(
        <div>
            <h1>VEHICLE MANUFACTURERS</h1>
            <nav>
                <label>search:</label>
                <input type="search" />
                <div id="filter">
                <label >Filter by vehicle Type:</label>
                <select>
                    <option>All</option>
                    <option>Passenger Car</option>
                    <option>Truck</option>
                    <option>Multipurpose Passenger vehicle</option>
                    <option>Motor Cyle</option>
                    <option>Trailer</option>
                    <option>Low speed vehicle</option>
                    <option>Off road vehicle</option>
                    <option>Bus</option>
                    <option>Incomplete vehicle</option>
                </select>
                </div>
            </nav>
        </div>
    )
}
export default Header