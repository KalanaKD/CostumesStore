import React, { useState } from "react";
import toast from "react-hot-toast";
import mediaUpload from "../utils/mediaUpload";

export function Test(){

    const [image, setImage] = useState(null);
    
    function fileUpload(){
        mediaUpload(image).then(
        (res)=>{
            console.log(res)
        }
        ).catch(()=>{
            toast.error("Error in file upload");
        });
    }


    return(
        <div className="w-full h-screen flex flex-col justify-center items-center bg-amber-200">
            <input type="file" className="file-input file-input-bordered w-full max-w-xs mb-4 border-2 border-blue-500" 
            onChange={
                (e)=>{
                    setImage(e.target.files[0]);
                    console.log(e.target.files[0]);
                }
            }
            />
            <button className="bg-blue-500 text-white p-2 rounded " 
            onClick={fileUpload}
            >Upload</button>
        </div>
        
    )
}