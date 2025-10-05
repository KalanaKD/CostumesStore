import React, {useState} from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload.jsx";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditProductPage() {

    const location = useLocation();
    const [productId, setProductId] = useState(location.state.productId);
    const [name, setName] = useState(location.state.name);
    const [altnames, setAltnames] = useState(location.state.altNames.join("/"));
    const [description, setDescription] = useState(location.state.description);
    const [images, setImages] = useState([]);
    const [labelledPrice, setLabelledPrice] = useState(location.state.labelledPrice);
    const [price, setPrice] = useState(location.state.price);
    const [stock, setStock] = useState(location.state.stock);
    const navigate = useNavigate();

    async function updateProduct(e){

        const token = localStorage.getItem("token");

        if(token == null){
            toast.error("You are not logged in");
            return;
        }

        if(images.length <= 0 ){
            toast.error("Please select at least one image");
            return;
        }
        let imgUrls = location.state.images;

        const promiseArray = [];

        for(let i=0; i<images.length; i++){
            promiseArray[i] = mediaUpload(images[i]);
        }

        try{

            if(images.length > 0){
                imgUrls = await Promise.all(promiseArray);
            }
            console.log(imgUrls);

            const altNamesArray = altnames.split(",");

            const product = {
                productId : productId,
                name : name,
                altNames : altNamesArray,
                description : description,
                images : imgUrls,
                labelledPrice : labelledPrice,
                price : price,
                stock : stock
            }
 
            axios.put(import.meta.env.VITE_BASE_URL+"/products/"+productId, product, {
                headers :{
                    "Authorization" : "Bearer "+token
                }
            })
            .then(
                (res)=>{
                    toast.success("Product updated successfully");
                    console.log(res.data);
                    navigate("/admin/products");
                }
            ).catch(
                (e)=>{
                    toast.error(e.response.data.message);
                    console.log("Error in updating product");
                    console.log(e);
                }
            );
        }
        catch(err){
            toast.error("Error in uploading images");
            console.log(err);
            return;
        }
        Promise.all(promiseArray)

    }
    return(
        <div className="w-full h-full flex flex-col justify-center items-center bg-amber-700 ">
            <h1>Update Product</h1>
            <input 
                type="text" 
                disabled 
                placeholder="Product ID" 
                className="input input-bordered w-full max-w-xs" 
                value={productId} 
                onChange={
                    (e) => setProductId(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Name" 
                className="input input-bordered w-full max-w-xs" 
                value={name} 
                onChange={
                    (e) => setName(e.target.value)} 
                />
            <input 
                type="text" 
                placeholder="Alternative Names" 
                className="input input-bordered w-full max-w-xs" 
                value={altnames} 
                onChange={
                    (e) => setAltnames(e.target.value)} 
                />
            <textarea 
                placeholder="Description" 
                className="textarea textarea-bordered w-full max-w-xs" 
                value={description} 
                onChange={
                    (e) => setDescription(e.target.value)}>
            </textarea>
            <input 
                type="file" 
                placeholder="Image" 
                multiple 
                className="input input-bordered w-full max-w-xs" 
                onChange={
                    (e) => setImages(Array.from(e.target.files))} 
            />
            <input 
                type="number" 
                placeholder="Labelled Price" 
                className="input input-bordered w-full max-w-xs" 
                value={labelledPrice} 
                onChange={
                    (e) => setLabelledPrice(e.target.value)} 
                />
            <input 
                type="number" 
                placeholder="Price" 
                className="input input-bordered w-full max-w-xs" 
                value={price} 
                onChange={
                    (e) => setPrice(e.target.value)} 
                />
            <input 
                type="number" 
                placeholder="Stock" 
                className="input input-bordered w-full max-w-xs" 
                value={stock} 
                onChange={
                    (e) => setStock(e.target.value)} 
                />
            <div className="w-full flex flex-row justify-center items-center">
                <Link to="/admin/products" className="btn btn-secondary mt-4 mr-4 bg-red-500 text-white font-bold py-2 px-4 rounded cursor-pointer ">Cancel</Link>
                <button className="btn btn-primary mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={updateProduct}>Update</button>
            </div>
        </div>
    )
}