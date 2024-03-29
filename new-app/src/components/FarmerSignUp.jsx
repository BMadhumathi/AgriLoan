import { useState } from "react";
import { TextField } from "@mui/material";
import {useNavigate } from 'react-router-dom'; 
import '../assets/css/FarmerLogin.css';
import back from "../assets/images/federico-respini-sYffw0LNr7s-unsplash.jpg";


function FarmerSignUp() {
    const navigate = useNavigate(); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateName = () => {
        // Add your validation logic for name
        if (name.trim() === "") {
            setNameError("Name is required");
        } else {
            setNameError("");
        }
    };

    const validateEmail = () => {
        // Add your validation logic for email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
    };

    const validatePhone = () => {
        // Add your validation logic for phone
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            setPhoneError("Invalid phone number");
        } else {
            setPhoneError("");
        }
    };

    const validatePassword = () => {
        // Add your validation logic for password
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
        } else {
            setPasswordError("");
        }
    };

    const handleSignUp = () => {
        // Perform signup logic here
        // Check if all fields are valid before proceeding
        validateName();
        validateEmail();
        validatePhone();
        validatePassword();

        // Check if all fields are valid
        if (!nameError && !emailError && !phoneError && !passwordError && name && email && phone && password) {
            // Perform signup logic (e.g., send data to backend)
            alert("Sign up successful!");
            navigate("/farmerlogin");
        } else {
            // Display an error message or prevent signup
            alert("Invalid input or missing fields");
        }
    };

    return (
        <>
            <div>
                <div id="img" style={{ backgroundColor: "green", backgroundImage: `url(${back})` }} data-overlay="5">
                <div>
                        <div className="parent" >
                            <div className="sign">
                                <center><div className="login"><h1 className="lo">Create Account🌾</h1></div></center>
                                <div className="fo">
                                    <center>
                                        <TextField id="standard-basic" label="Name" variant="standard" onChange={(e) => setName(e.target.value)} onBlur={validateName} />
                                        <span className="error-message">{nameError}</span>
                                        <br></br>
                                        
                                        <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} />
                                        <span className="error-message">{emailError}</span>
                                        <br></br>
                                        
                                        <TextField id="standard-basic" label="Phone" variant="standard" onChange={(e) => setPhone(e.target.value)} onBlur={validatePhone} />
                                        <span className="error-message">{phoneError}</span>
                                        <br></br>
                                        
                                        <TextField id="standard-basic" label="Password" variant="standard" type="password" onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} />
                                        <span className="error-message">{passwordError}</span>
                                            <div className="but1">
                                                <button onClick={handleSignUp} className="but2">Sign Up</button>
                                                <p>Already Have an Account?</p>
                                                <a href="/farmerlogin" id="link-button">Sign In</a>
                                            </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FarmerSignUp;