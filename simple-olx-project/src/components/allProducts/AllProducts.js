import { useEffect, useState } from "react"
import AllProductsCard from "./AllProductCard";

export default function AllProducts(){
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((p) => setProducts(p.products));
  },[]);
  
    return(<div>
         {products.map(product => <AllProductsCard key={product.id} img = {product.images[0]}/>)}
    </div>)
}