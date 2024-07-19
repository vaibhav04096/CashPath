import { useParams } from "react-router-dom"
import style from "./navbar.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Edit=()=>{
    
    let navigate1=useNavigate()
    let obj=useParams()
    let [cusid,setCusid] =useState("")
    let [amount,setAmount] =useState("")
    let [desc,setDesc] =useState("")
    let [date,setDate] =useState("")
    let [paytype,setPaytype] =useState("")


    
    useEffect(()=>{
        axios.get(`/api/data`)
        .then((there)=>{
            there.data.map((da)=>{
                if(da.id==obj.abc){
                    console.log("haha");
            setCusid(da.CustomerId)
            setAmount(da.Amount)
            setDesc(da.Description)
            setDate(da.Date)
            setPaytype(da.Payment)
                }else{
          
                }
            })
            

        })
        .catch((er)=>{console.log("error" ,er);})
    },[])
    let editData ={
        id:obj.abc,
        CustomerId:cusid,
        Amount:amount,
        Description:desc,
        Payment:paytype,
        Date:date,
    }
    const newData=(e)=>{
        e.preventDefault()
            axios.put(`/api/data`,{editData})
            .then(()=>{
                alert("DATA HAS BEEN UPDATED")
                navigate1("/output")
            })
            .catch(()=>{console.log("error");})
            
        }
    return(
        <div id={style.Edit}>
            
        <div>
            <form id={style.Edit_area} onSubmit={newData}>
                <h1>Edit</h1>
            <label>Enter The CustomerId</label><br/><br/>

            <input type="number" value={cusid} onChange={(e)=>{setCusid(e.target.value)}} required/><br/><br/>

            <label>Enter The Amount Withdraw</label><br/><br/>

            <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} required/><br/><br/>

            <label>Transaction Description</label><br/><br/>

            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} required/><br/><br/>

            <label>Payment Type</label><br /><br />

                    <select type="text" value={paytype} onChange={(e)=>{setPaytype(e.target.value)}} required>
                        <option value="">Select Payment Type</option>
                        <option value="withdraw">Withdraw</option>
                        <option value="credit">Credit</option>
                    </select><br /><br />
                    
                    <label>Date</label><br /><br />
            <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}} required/><br/><br/>

            <button type="submit" >Submit</button>
            </form>
        </div>
        </div>
    )
}
export default Edit