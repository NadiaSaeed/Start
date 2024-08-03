import React, { useState } from 'react';
import "./signup.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sign_up() {
    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });

    const adddata = (e) => {
        const { name, value } = e.target;
        setUdata((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validateInputs = () => {
        const { fname, email, mobile, password, cpassword } = udata;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^\d{10,12}$/;

        if (!fname) {
            toast.warn("Name is required", { position: "top-center" });
            return false;
        }
        if (!email || !emailRegex.test(email)) {
            toast.warn("Invalid email address", { position: "top-center" });
            return false;
        }
        if (!mobile || !mobileRegex.test(mobile)) {
            toast.warn("Mobile number must be 10 to 12 digits", { position: "top-center" });
            return false;
        }
        if (!password || password.length < 6) {
            toast.warn("Password must be at least 6 characters", { position: "top-center" });
            return false;
        }
        if (password !== cpassword) {
            toast.warn("Passwords do not match", { position: "top-center" });
            return false;
        }

        return true;
    };

    const senddata = async (e) => {
        e.preventDefault();
        if (!validateInputs()) return;

        const { fname, email, mobile, password, cpassword } = udata;
        try {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fname, email, mobile, password, cpassword })
            });

            const data = await res.json();

            if (res.status === 422 || !data) {
                toast.warn("Invalid Details 👎!", { position: "top-center" });
            } else {
                setUdata({ fname: "", email: "", mobile: "", password: "", cpassword: "" });
                toast.success("Registration Successfully done 😃!", { position: "top-center" });
            }
        } catch (error) {
            console.log("Front end error: " + error.message);
        }
    };

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-Up</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input
                                type="text"
                                name="fname"
                                onChange={adddata}
                                value={udata.fname}
                                id="name"
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={adddata}
                                value={udata.email}
                                id="email"
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input
                                type="text"
                                name="mobile"
                                onChange={adddata}
                                value={udata.mobile}
                                id="mobile"
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={adddata}
                                value={udata.password}
                                id="password"
                                placeholder="At least 6 characters"
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Password again</label>
                            <input
                                type="password"
                                name="cpassword"
                                onChange={adddata}
                                value={udata.cpassword}
                                id="cpassword"
                            />
                        </div>
                        <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>
                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer className="toast-container" />
        </section>
    );
}

export default Sign_up;
