import  { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import '../assets/css/FarmerLogin.css';
import back from "../assets/images/admin.jpg";
import ButtonAppBar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
function FarmerLogin() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

    return ( 
    <>
      {loading ? (<div className="flex-container">
        <HashLoader color="#36d7b7" 
        
/></div>
      ) : (
        <>
    <div>
        <ButtonAppBar/>
   <div id="img"style={{backgroundColor:"green",backgroundImage: `url(${back})`}} data-overlay="5">
    <div>

    <div className="parent">
         <div className="sign">
            <center><div className="login"><h1 className="lo">Welcome Admin 🤖</h1></div></center>
            <div id="log">
            <a id="a" href="/farmerlogin">FARMER</a> 
            <a id="a" href="/adminlogin">ADMIN</a> 
            </div>
            <div className="fo">
                <center>
            <TextField id="standard-basic" label="Email" variant="standard" />
            <br></br>
            <div className="pass">
            <TextField id="standard-basic" label="Password" variant="standard" />
            </div>
            <div className="but">
            <div className="but1">
            <button onClick={()=>navigate("/adminhome")} className="but2">Sign in</button>
            </div>
            </div>
            </center>
            </div>  
         </div>
    </div>
    </div>
   </div>
    </div>
    </> )}</>);
}

export default FarmerLogin;