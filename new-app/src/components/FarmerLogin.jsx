
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { HashLoader } from "react-spinners";
import '../assets/css/FarmerLogin.css';  // Make sure to import your CSS file
import back from "../assets/images/federico-respini-sYffw0LNr7s-unsplash.jpg";

// FarmerLogin component
function FarmerLogin() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
        } else {
            setPasswordError("");
        }
    };

    const handleSignIn = () => {
        // Perform login logic here
        // Check if email and password are valid before navigating
        validateEmail(); // Call email validation
        validatePassword(); // Call password validation

        // Check if both email and password are valid
        if (!emailError && !passwordError && email && password) {
            if (email.toLowerCase() === 'admin@gmail.com') {
                // Navigate to adminhome if the email is admin@gmail.com
                navigate("/adminhome");
            } else {
                // Navigate to farmerhome for other emails
                navigate("/farmerhome");
            }
        } else {
            // Display an error message or prevent navigation
            console.log("Invalid email or password");
        }
    };

    return (
        <>
            {loading ? (
                <div className="flex-container">
                    <HashLoader color="#36d7b7" />
                </div>
            ) : (
                <>
                    <div>
                        <div id="img" style={{ backgroundColor: "green", backgroundImage: `url(${back})` }} data-overlay="5">
                        <div>
                                <div className="parent">
                                    <div className="sign">
                                        <center><div className="login"><h1 className="lo">Welcome back🌾</h1></div></center>

                                        <div className="fo">
                                            <center>
                                                <TextField
                                                    id="standard-basic"
                                                    label="Email"
                                                    variant="standard"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    onBlur={validateEmail}
                                                    autoComplete="off"  // Add this line to disable autofill for email

                                                />
                                                <span className="error-message">{emailError}</span>
                                                <br />
                                                <div className="pass">
                                                    <TextField
                                                        id="standard-basic"
                                                        label="Password"
                                                        variant="standard"
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        onBlur={validatePassword}
                                                    />
                                                    <span className="error-message">{passwordError}</span>
                                                </div>
                                                <div className="but">
                                                    <div className="but1">
                                                        <button onClick={handleSignIn} className="but2">Sign in</button>
                                                    </div>
                                                    <p style={{color:"black"}}> Dont Have an Account?</p>
                                                    <a href="/farmersignup" id="link-button"  style={{color:"black"}}>Sign Up</a>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default FarmerLogin;