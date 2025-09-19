import Product from '../models/product.js';
import { isAdmin } from '../controllers/userController.js';

export async function getProducts(req, res){
    // Product.find().then((data)=>{
    //     res.json(data);
    // }).catch((err)=>{
    //     res.status(500).json({
    //         message : "Error retrieving products",
    //         error : err
    //     });
    // });
    try{
        if(isAdmin(req)){
            const products = await Product.find();
            res.status(200).json(products);
        }
        else{
            const products = await Product.find({ isAvailable : true });
            res.status(200).json(products);
        }
    }catch(err){
        res.status(500).json({
            message : "Error retrieving products",
            error : err
        });
    }
}

export function saveProducts(req, res){
    
    
    if(!isAdmin(req)){
        res.status(403).json({
            message : "Only admin can add products"
        });
        return;
    }

    const product = new Product( req.body );

    product.save().then(()=>{
        res.json({
            message : "Product added successfully"
        });
    }).catch(()=>{
        res.json({
            message : "Failed to add product"
        });
    });
}

export async function deleteProduct(req, res){
    if(!isAdmin(req)){
        res.status(403).json({
            message : "Only admin can delete products"
        });
        return;
    }
    try{
        await Product.deleteOne({productId : req.params.productId });
        res.status(200).json({
            message : "Product deleted successfully"
        });
    }catch(err){
        res.status(500).json({
            message : "Failed to delete product",
            error : err
        });
    }
}