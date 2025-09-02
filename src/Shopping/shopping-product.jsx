import axios from "axios";
import{useEffect,useState}from "react"
export function ShoppingProducts({addToCart}){
    const[products,setProducts]= useState([{id:0,title:null,image:null,description:null,price:0,category:null}]);
    
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(respons=>{
            setProducts(respons.data);
        })
    },[])
    function handleAddClick(product){
       addToCart(product);
    }
    return(
        <div className="d-flex mt-3 flex-wrap overflow-auto"style={{height:'550px'}}>{
        products.map(product=><div key={product.id}className="card m-2 p-2"style={{width:'200px'}}><img src={product.image}className="card-img-top"height="120"/>
        <div className="card-header overflow-auto"style={{height:'140px'}}>{product.title}</div>
        <div className="card-body"><h3>{product.price}</h3></div>
        <div className="card-footer"><button onClick={()=>{handleAddClick(product)}}className="btn btn-warning w-100 bi bi-cart4">Add To card</button></div></div>)
        }</div>
    )
}