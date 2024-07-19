const express = require("express")
const path = require("path")
const cors= require("cors")
const { default: axios } = require("axios")
 
let Port =process.env.Port||5000

 const app= express()

 app.use(express.json())
 app.use(cors())

let data;
 
const setdata=()=>{
axios.get(`http://localhost:5004/Elements`)
 .then((respo)=>{
data=respo.data
 })
 .catch((er)=>{
    console.log(er);
 })
}


app.get('/api/data',(request,response)=>{
    
    setdata()
    response.send(data)
    console.log(data);
})

app.post("/api/data",(request,response)=>{
    const {Description,Amount,Date,Payment,CustomerId}=request.body
    console.log(request.body);
   
    const entry={Description,Amount,Date,Payment,CustomerId}
    axios.post("http://localhost:5004/Elements",entry)
    .then(()=>{
        console.log("data send");
        response.end("send")
    })
    .catch((er)=>{console.log(er);})
})

app.put(`/api/data`,(request,response)=>{
console.log(request.body.editData);
const update=request.body.editData
console.log(update);
console.log(update.id);
response.send("hello")
axios.put(`http://localhost:5004/Elements/${update.id}`,update)
.then(()=>{
    console.log("data has been updated");
    response.end("send")
})
.catch((er)=>{console.log(er);})
})




app.use(express.static(path.join(__dirname,'../client/public')))

app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'../client/public/index.html'))
})

 app.listen(Port,()=>{
    console.log(`the Serve has started on ${Port}`);
 })

 