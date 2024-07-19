import { Link } from "react-router-dom"
import style from "./navbar.module.css"
const Navbar =()=>{
    return(
        <div id={style.nav}>
            <Link to="/" >Customer Info</Link>
            <Link to="/output">Spend Info</Link>
            <Link to="/unique_id">Detailed Info</Link>
            </div>
    )
}
export default Navbar



{/* <div id={style.nav}>
<Link to="/" >Customer Info</Link>
<Link to="/output">Spend Info</Link>
</div> */}