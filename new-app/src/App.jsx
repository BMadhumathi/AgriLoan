import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { lazy } from "react"
import LazyLayout from "./components/LazyLayout";

import FarmerLogin from "./components/FarmerLogin";
import FarmerSignUp from "./components/FarmerSignUp";
import FarmerHome from "./components/FarmerHome";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import Chart from "./components/Dashboard";
import ApplyLoan_page1 from "./components/ApplyLoan_page1";
import ApplyLoan_page2 from "./components/ApplyLoan_page2";
import AdminNav from "./components/AdminNav";
import LoanDetails from "./components/LoanDetails";
import AppliedLoans from "./components/AppliedLoans";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import TrackLoan from "./components/TrackLoan";
import Career from "./pages/Career";
import Home from "./components/Apply";
import AdminHome from "./pages/AdminHome";
import UserProfile from "./components/UserProfile";
const LazyLogin =lazy(()=>import("./components/FarmerLogin"))
const LazySignup =lazy(()=>import("./components/FarmerSignUp"))

function App() {
  
  return ( 
 
    <Routes>
    <Route path="/" element={<FarmerLogin/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/farmerlogin" element={<LazyLayout component={LazyLogin} />}/>
    <Route path="/farmerhome" element={<FarmerHome/>}/>
    <Route path="/farmersignup" element={<LazyLayout component={LazySignup} />}/>
    <Route path="/footer" element={<Footer/>}/>
    <Route path="/sideNav" element={<SideNav/>}/>
    <Route path="/profile" element={<UserProfile/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/adminlogin" element={<LazyLayout component={LazyLogin} />}/>
    <Route path="/chart" element={<Chart/>}/>
    <Route path="/applyloan1" element={<ApplyLoan_page1/>}/>
    <Route path="/applyloan2" element={<ApplyLoan_page2/>}/>
    <Route path="/AdminNav" element={<AdminNav/>}/>
    <Route path="/appliedloans" element={<AppliedLoans/>}/> 
    <Route path="/loandetails" element={<LoanDetails/>}/> 
    <Route path="/trackloan" element={<TrackLoan/>}/>
    <Route path="/career" element={<Career/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/adminhome" element={<AdminHome/>}/>

   </Routes>
   
   
   );
}

export default App;