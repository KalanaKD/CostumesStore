import "./ProductCard.css"

export default function ProductCard(props){
    return(
        <div className="product-card w-[100px] h-[420px] bg-red-300" >
            <img className="product-image" src={props.image} 
            alt={props.altDes} />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h2>Price: {props.price}</h2>
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
        </div>
    )
}