import style from "./navbar.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import Total from "./Total"
import { Link } from "react-router-dom"

const Output=()=>{
   
    let [user,setUser]=useState([])
    let [change,setChange]=useState(0)
    useEffect(()=>{
        axios.get("/api/data")
        .then((response)=>{setUser(response.data)})
        .catch(()=>{console.log("error");})
    },[change])
    const handelDelete=(id)=>{
       console.log(id);
       axios.delete(`http://localhost:5004/Elements/${id}`)
       .then(()=>{alert("deleted");})
       .catch(()=>{console.log();})
    }
    
    return(
        <div>
             <Total/>
             
        <div id={style.output}>
            <table id={style.table}>
                <thead>
                <tr>
                    <th>CustomerId</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Payment Type</th>
                    <th>Date</th>
                
                        
                </tr>
                </thead>
                <tbody>
            {user.map((detail)=>{
               return(
               <tr id={style.table_data}>
                <td>{detail.CustomerId}</td>
               <td>{detail.Description}</td>
               <td>{detail.Amount}</td>
               <td>{detail.Payment}</td>
               <td>{detail.Date}</td>
               <button><Link to={`/edit/${detail.id}`}>Edit</Link></button>
               <button onClick={()=>{
                handelDelete(detail.id)
                setChange(change+1);
               }}
               >Delete</button>
               </tr>
               
               
               )
            })}
            </tbody>
            </table>
        </div>
        </div>
    )
}
export default Output