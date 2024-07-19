import axios from "axios"
import style from "./navbar.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Input=()=>{
    let navigate =useNavigate()
    let [amount,setAmount] = useState("")
    let [date,setDate]= useState("")
    let [desc,setDesc]= useState("")
    let [id,setId]= useState("")
    let [payment,setPayment]= useState("")

    let getAmount=(e)=>{

        setAmount(e.target.value)
       
    }
    let getdesc=(a)=>{
        setDesc(a.target.value)
       
    }
    let getDate=(b)=>{
        setDate(b.target.value);
    }
    let getId=(b)=>{
        setId(b.target.value);
    }
    let getPayment=(b)=>{
        setPayment(b.target.value);
    }

    let data_base={
        Description:desc,
        Amount:amount,
        Date:date,
        Payment:payment,
        CustomerId:id
    }
    const Set_data=(e)=>{
    e.preventDefault()
        axios.post("/api/data",data_base)
        .then(()=>{
            alert("Data sent")
            navigate("/output")
        })
        .catch(()=>{console.log("error");})

    }
    return(
       
        <div id={style.input}>
            <div >
                <form onSubmit={Set_data} id={style.input_area}>
                    <h1>Info</h1>
            <label>Enter The CustomerId</label><br/><br/>
            <input value={id} onChange={getId} type="number" placeholder=" Enter the Id " required/><br/><br/>
            <label>Enter The Amount</label><br/><br/>
            <input value={amount} onChange={getAmount} type="number" placeholder=" Enter the amount "  required/><br/><br/>
            <label>Transaction Description</label><br/><br/>
            <input value={desc} onChange={getdesc} type="text" placeholder=" Description" required/><br/><br/>
            <label>Payment Type</label><br /><br />
                    <select value={payment} onChange={getPayment}  required>
                        <option value="">Select Payment Type</option>
                        <option value="withdraw">Withdraw</option>
                        <option value="credit">Credit</option>
                    </select><br /><br />
                    
                    <label>Date</label><br /><br />
            <input value={date} onChange={getDate} type="date" placeholder=" yy/mm/dd"  required/><br/><br/>
            <button type="submit">Submit</button>
            </form>
        </div>
        </div>
      
        
    )
    
}
export default Input