import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url,key);

export default function mediaUpload(file){
    const mediaUploadPromise = new Promise(
        (resolve, reject)=>{
            if(file==null){
                toast.error("Please select a file first");
                reject("File not selected");
                return;
            }
            const timestamp = new Date().getTime();
            const newName= timestamp+file.name;
            
            supabase.storage.from("images").upload(newName, file, {
                upsert: false,
                cacheControl: "3600",
            }).then(
                ()=>{
                    const publicUrl = supabase.storage.from("images").getPublicUrl(newName).data.publicUrl;
                    toast.success("File uploaded successfully");
                    console.log(publicUrl);
                    resolve(publicUrl);
                })
                .catch(()=>{
                    toast.error("Error in file upload");
                    reject("Error in file upload");
                });
            //promise okay -> resolve, not okay -> reject

        }
    );

    return mediaUploadPromise;
}