import Categories from "../categories/Categories";
import Links from "../links/Links";
import Navbar from "../navbar/Navbar";
import ProductFeature from "../productFeatures/ProductsFeature";
import "./Header.css";
export default function Header({setAccount}) {
    return (
        <div>
            {/* Header */}
        <div className="Header">
            <Navbar setAccount = {setAccount}></Navbar>
        </div>
        {/* Products-Features */}
        <br></br>
        <br></br>
        <br></br>
       <div className="Header-Heading"><Categories ></Categories><Links></Links></div> 
        <br></br>
        <br></br>
        
        <ProductFeature></ProductFeature>
        </div>
    )
}