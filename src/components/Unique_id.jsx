import axios from "axios"
import style from "./navbar.module.css"
import { useEffect, useState } from "react"

const Unique_id=()=>{
    const [user,setUser]=useState([])
    const [total,setTotal]=useState(0)
    const [id ,setId]=useState()

    useEffect(()=>{
        axios.get("/api/data")
        .then((response)=>setUser(response.data))
        .catch(()=>{console.log("Error");})
    },[]);
    

    useEffect(()=>{
        let calc_Total=0;
        user.forEach((ele)=>{

            if(ele.CustomerId===id){        
            if(ele.Payment==="Withdraw"){
                const amount = parseFloat(ele.Amount)
                calc_Total -=amount
            }
            else if(ele.Payment==="Credit"){
                const amount = parseFloat(ele.Amount)
                calc_Total +=amount
            }
        }
        });
     setTotal(calc_Total)
     },[user][id])
    
     const getid=(b)=>{
        setId(b.target.value)
     }
 
    return(
        <div id={style.Unique}>
        <div id={style.Unique_id}>
            <h1>Detailed Info</h1>
            <input type="number" value={id} onChange={getid}  placeholder="ENTER YOUR CUSTOMER ID"/>
            <h2>TOTAL: {total}</h2>
        </div>
        <table id={style.table_unique}>
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
            {user.filter(detail=>detail.CustomerId==id).map((detail)=>{
               return(
                
               <tr>
                <td>{detail.CustomerId}</td>
               <td>{detail.Description}</td>
               <td>{detail.Amount}</td>
               <td>{detail.Payment}</td>
               <td>{detail.Date}</td>
               </tr> 
               )
            })}
            </tbody>
            </table>
        </div>
       
    )
}
export default Unique_id