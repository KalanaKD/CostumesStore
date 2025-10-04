import { sampleProducts } from "../../assets/sampleData";
import React , {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import toast from "react-hot-toast";
 
export default function AdminProductsPage() {

    const [products, setProducts] = useState(sampleProducts);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{

        if(isLoading == true){
            axios
            .get(import.meta.env.VITE_BASE_URL+"/products")
            .then(
                (res)=>{
                    console.log(res.data);
                    setProducts(res.data);
                }
            ).catch(
                ()=>{
                    console.log("Error in fetching products");
                }
            )
            setIsLoading(false);
        }
    },[isLoading]);

    function deleteProduct(productId){
        const token = localStorage.getItem("token");
        if(token == null){
            toast.error("You are not logged in");
            return;
        }
        axios.delete(import.meta.env.VITE_BASE_URL+"/products/"+productId,{
            headers:{
                "Authorization": "Bearer "+token
            }})
            .then(
                ()=>{
                    toast.success("Product deleted successfully");
                    setIsLoading(true); 
                }
            ).catch(
                (e)=>{
                    toast.error(e.response.data.message);
                }
            );
        }


    return(
        <div className="w-full h-full bg-red-200 max-h-full overflow-y-scroll relative">
            <Link to="/admin/add-product" className="absolute bottom-10 right-10 bg-green-400 text-white text-xl px-4 py-2 rounded-2xl cursor-pointer">+</Link>
            <table className="w-full table-auto border border-gray-300 text-center">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Labelled Price</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>COSM24003</td>
                        <td>Product 1</td>
                        <td className="flex justify-center">
                            <img src={exImg} alt="Product 1" className="w-[50px] h-[50px]" />
                        </td>
                        <td>$10.00</td>
                        <td>$8.00</td>
                        <td>In Stock</td>
                    </tr> */}
                    {products.map(
                        (item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.productId}</td>
                                    <td>{item.name}</td>
                                    <td className="flex justify-center">
                                        <img src={item.images} alt={item.name} className="w-[100px] h-[100px]" />
                                    </td>
                                    <td>{item.labelledPrice}</td>
                                    <td>{item.price}</td>
                                    <td>{item.stock}</td>
                                    <td>
                                        <div className="w-full flex flex-row justify-center items-center gap-2">
                                            <FaTrash className="text-2xl text-red-900 cursor-pointer" 
                                            onClick={
                                                ()=>{
                                                    deleteProduct(item.productId);
                                                }
                                            }/>
                                            <FaEdit onClick={
                                                ()=>{
                                                    navigate("/admin/edit-product",
                                                        {
                                                            state :item
                                                        }
                                                    )
                                                }
                                            } className="text-2xl text-shadow-blue-600 cursor-pointer"/>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </div>

    );
}