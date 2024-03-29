import { useEffect, useState } from "react";
import HomeAppBar from "../components/FarmerHomeNavbar";
import img1 from '../assets/images/Hometwo.jpg'
import img2 from '../assets/images/Homeone.jpg'
import { useNavigate } from 'react-router';
import '../assets/css/Farmerhome.css';
import { HashLoader } from "react-spinners";
import Footer from "./Footer";
const FarmerHome = () => {
    const navigate =useNavigate();
    const hello =() =>{
        navigate('/contact')
    }
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
        <HashLoader color="#36d7b7"/>
        </div>
      ) : (
        <>
        <div>
            <HomeAppBar/>
            <div>
        <section className="about-section" >
            <div className="container777">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column">
                            <div className="sec-title777">
                                <span className="title777">AGRICULTURE LOAN</span>
                                <h2>Grow your farming dreams <br />with our agriculture loan schemes</h2>
                            </div>
                            <div className="text">The Agriculture sector plays a major role not only 
                            <br></br>
                            in the economy of our country but also in 
                            <br></br>
                            providing livelihoods to millions of rural folk. 
                            <br></br>
                            We support the farmer by way of Short term credit for financing crop production, 
                            <br></br>
                            by helping with purchase of seeds, fertilizers, pesticides etc. 
                            <br></br>
                            All types of crops are supported, from staples like rice to cash crops 
                            <br></br>
                            like sugarcane and cotton including multiple cropping.
                            <br></br>
                            little ones and expecting parents. 
                            <br></br></div>
                            <ul className="list-style-one">
                                <li>Low Interest Rate</li>
                                <li>No Hidden Charges</li>
                                <li>Minimal Documentation</li>
                                <li>Apply Online</li>
                            </ul>
                            <div className="btn-box">
                                <a href="/contact" className="theme-btn btn-style-one" onClick={hello}>Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInLeft">
                            <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img
                                src={img1} style={{height:300,width:400}} alt="" /></a></figure>
                            <figure className="image-2"><a href="#" className="lightbox-image" data-fancybox="images"><img
                                src={img2} style={{height:300, width:300}} alt="" /></a></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </div>
        </> )}
        <div>
        <Footer/>
        </div>
        </>);

};

export default FarmerHome;
