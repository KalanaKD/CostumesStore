import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    async function handleChange(){
        try{
                const response = await axios.post( import.meta.env.VITE_BASE_URL+"/users/login", {
                    email:email,
                    password:password
                });
                toast.success("Login Successful");
                console.log(response);
                localStorage.setItem("token", response.data.token);
                const token = localStorage.getItem("token");
                console.log(token);

                // if(response.data.isAdmin){
                //     window.location.href = "/admin";
                // }
                // else{
                //     window.location.href = "/";
                // }

                if(response.data.role === "admin"){
                    navigate("/admin/");
                }
                else{
                    navigate("/");
                }
                
        }
        catch(err){
            toast.error(err.response.data.message);
        }
    }

  return (
    <div className="w-full h-screen bg-[url('/login.jpg')] bg-center flex justify-evenly items-center">
        <div className="w-[50%] h-full">

        </div>
        <div className="w-[50%] h-full justify-center items-center">

            <div className="w-[500px] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center gap-2">
                <input  onChange={
                    (event)=>{
                        setEmail(event.target.value);
                    }
                } value={email}
                type="text" className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] my-[20px]"  />
                <input  onChange={
                    (event)=>{
                        setPassword(event.target.value);
                    }} value={password}
                type="password" className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px]" />
                <button onClick={handleChange} className="w-[300px] h-[50px] bg-[#c3efe9] rounded-[20px] my-[20px] text-[20px] font-bold cursor-pointer hover:bg-[#b2e0d9]">Login</button>
            </div>

        </div>
    </div>
  );
}
