import React from "react";
import './body.css'
import { useState } from "react";
const Body = () => {
    const [result,setResult] = useState([])
    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json&page=1')
        .then(res => res.json())
        .then(data => { 
            setResult(data.Results)
            } 
        )
        .catch((err) => { console.log(err) })
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Country</td>
                                <td>Type</td>
                            </tr>
                        </thead>
                        <tbody >
                             {result.map((data,i)=>{
                                if(data.VehicleTypes.length !==0){
                                return(
                                    <tr key={i}>
                                    <td>{data.Mfr_Name}</td>
                                    <td>{data.Country}</td>
                                    {data.VehicleTypes.slice(0,1).map((data)=>{
                                       return(
                                        <td>{data.Name}</td>
                                       )
                                    })}
                                     </tr> 
                                )
                                }
                             })} 
                            
                          </tbody> 
                     </table>
                </div>
            )
            }
export default Body