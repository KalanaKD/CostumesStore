import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleRegister() {
        try {
            const response = await axios.post(
                import.meta.env.VITE_BASE_URL + "/users",
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                }
            );

            toast.success("Registration Successful");
            console.log(response);
            navigate("/login");

        } catch (err) {
            toast.error(err.response?.data?.message || "Registration Failed");
        }
    }

    return (
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-center flex justify-evenly items-center">
            <div className="w-[50%] h-full"></div>
            <div className="w-[50%] h-full justify-center items-center">
                <div className="w-[500px] h-[700px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center gap-2">
                    
                    <input
                        onChange={(event) => setFirstName(event.target.value)}
                        value={firstName}
                        type="text"
                        placeholder="First Name"
                        className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[10px] px-3"
                    />

                    <input
                        onChange={(event) => setLastName(event.target.value)}
                        value={lastName}
                        type="text"
                        placeholder="Last Name"
                        className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[10px] px-3"
                    />

                    <input
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email"
                        className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[10px] px-3"
                    />

                    <input
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                        className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[10px] px-3"
                    />

                    <button
                        onClick={handleRegister}
                        className="w-[300px] h-[50px] bg-[#c3efe9] rounded-[20px] my-[20px] text-[20px] font-bold cursor-pointer hover:bg-[#b2e0d9]"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
