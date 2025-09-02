import { useEffect, useState } from "react"

export function Amazon(){

    
    const [product, setProduct] = useState({title:'', price:0, image:'null', rating:{rate:0, ratings:0, reviews:0}, offers:[]});


    useEffect(()=>{
            
          var http = new XMLHttpRequest();
          http.open("get", "db.json", true);
          http.send();

          http.onreadystatechange = function(){

                if(http.readyState===4){
                      
                      setProduct(JSON.parse(http.responseText));
                      
                }

          }
    
    })

    return(
        <div className="container-fluid">
            <div className="row mt-2">
                <div className="col-3">
                    <img src={product.image} width="100px" height="100px" alt="product"/>
                </div>
                <div className="col-9">
                    <div className="fs-4">{product.title}</div>
                    <div className="mt-2">
                        <span className="badge bg-success text-white rounded"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="text-secondary fw-bold"> {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews} reviews </span>
                    </div>
                    <div className="mt-3">
                        <div className="h1">{product.price.toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0})}</div>
                    </div>
                    <div className="mt-3">
                        <h5>Available Offers</h5>
                        <ul  className="list-unstyled">
                            {
                                product.offers.map(offer=><li className="bi bi-tag-fill my-3 text-success" key={offer}> <span className="text-secondary">{offer}</span> </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Amazon



























