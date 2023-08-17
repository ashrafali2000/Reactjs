import "./Button.css";
import {useState} from "react";
export default function Button({search, signin, createAccount,setAccount,setSignAccount}){
    const [check, setCheck] = useState(true);
const btnSignUpHandler = () => {
    setAccount();
}
const btnLoginHandler = () => {
    setSignAccount()
}
    return (<div>
        <button className={`btn ${check? "hide" : "show"}`}>{search}</button>
        <button className="btn" onClick={btnLoginHandler}>{signin}</button>
        <button className="btn" onClick={btnSignUpHandler}>{createAccount} </button>
    </div>)
}