import logo from "../images/olx-logo.png"
import "./Navbar.css"
import Input from "../input/Input"
import Button from "../button/Button"
export default function Navbar({setAccount}) {
    return(
        <div className="Navbar">
            {/* logo */}
            <img src={logo} alt="my logo" width={140} height={140}/>
           {/* header */}
            <Input />
            <Button search = {"Search"} signin = {"Sing in"} createAccount = {"Create account"} setAccount= {setAccount}/>
        </div>
    )
}