import { BrowserRouter, Routes,Route } from "react-router-dom"
import Input from "./Inputs"
import Output from "./Output"
import Navbar from "./Navbar"
import Unique_id from "./Unique_id"
import Edit from "./Edit"
const Horizon=()=>{
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
            
                <Routes>
                    <Route element={<Input/>} path="/"/> 
                    <Route element={<Output/>} path="/output"/>
                    <Route element={<Unique_id/>} path="/unique_id"/>
                    <Route element={<Edit/>} path="/edit/:abc" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Horizon