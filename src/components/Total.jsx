import axios from "axios"
import style from "./navbar.module.css"
import { useEffect, useState } from "react"

const Total=()=>{
    const [user,setUser]=useState([])
    const [total,setTotal]=useState(0)
    useEffect(()=>{
        axios.get("/api/data")
        .then((response)=>setUser(response.data))
        .catch(()=>{console.log("Error");})
    },[]);
    

    useEffect(()=>{
        let calc_Total=0;
        user.map((ele)=>{
                    
            if(ele.Payment=="withdraw"){
                const amount = parseFloat(ele.Amount)
                calc_Total -=amount
            }
            else if(ele.Payment=="credit"){
                const amount = parseFloat(ele.Amount)
                calc_Total +=amount
            }
        })
        
     setTotal(calc_Total)
     },[user])
 
    return(
        <div id={style.Total}>
            
            <h2>TOTAL: {total}</h2>
        </div>
    )
}
export default Total