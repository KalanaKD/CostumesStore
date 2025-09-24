import Order from "../models/order.js";
import Product from "../models/product.js";

export async function createOrder(req, res){
    //userInfo
    if(req.user == null){
        res.status(403).json({
            message : "User not logged in and try again"
        });
        return;
    }

    const orderInfo = req.body;

    if(orderInfo.name == null){
        orderInfo.name = req.user.firstName + " " + req.user.lastName;
    }

    //CBC00001
    let orderId = "CBC00001";

    const lastOrder = await Order.find().sort({
        date : -1
    }).limit(1); //[] =>lastOrder array

    if(lastOrder.length > 0 ){
        const lastOrderId = lastOrder[0].orderId; //CBC00551
        const lastOrderNumberString = lastOrderId.replace("CBC", ""); //00551
        const lastOrderNumber = parseInt(lastOrderNumberString); //551
        const newOrderNumber = lastOrderNumber + 1; //552
        const newOrderNumberString = String(newOrderNumber).padStart(5, "0");
        orderId = "CBC" + newOrderNumberString; //CBC00552

    }

    try{
        let total = 0;
        let labelledTotal = 0 ;
        const products = [];

        for(let i =0; i< orderInfo.products.length; i++){
            const item = await Product.findOne({ productId : orderInfo.products[i].productId});
            if(item == null ){
                res.status(404).json({
                    message : `Product with id ${orderInfo.products[i].productId} not found`
                });
                return;
            }

            if(item.isAvailable == false){
                res.status(404).json({
                    message : `Product with id ${orderInfo.products[i].productId} is not available`
                });
                return;
            }

            products[i] = {
                productInfo : {
                    productId : item.productId,
                    name : item.name,
                    altNames : item.altNames,
                    description : item.description,
                    images : item.images,
                    labelledPrice : item.labelledPrice,
                    price : item.price,
                },
                quantity : orderInfo.products[i].qty
            }
            total += item.price * orderInfo.products[i].qty;
            labelledTotal += item.labelledPrice * orderInfo.products[i].qty;
        }
        const order = new Order({
        orderId : orderId,
        email : req.user.email,
        name : orderInfo.name,
        address : orderInfo.address,
        phone : orderInfo.phone,
        products ,
        labelledTotal ,
        total 
    });

    const createdOrder =  await order.save();
        res.status(201).json({
            message : "Order created successfully",
            order : createdOrder
        });

    }catch(err){
        res.status(500).json({
            message : "Creating order failed, please try again",
            error : err
        });
        return;

    }
    
}