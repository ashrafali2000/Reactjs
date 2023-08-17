import "./Button.css";
import {useState} from "react";
export default function Button({search, signin, createAccount,setAccount}){
    const [check, setCheck] = useState(true);
const btnSubmitHandler = () => {
    setAccount();
}
    return (<div>
        <button className={`btn ${check? "hide" : "show"}`}>{search}</button>
        <button className="btn">{signin}</button>
        <button className="btn" onClick={btnSubmitHandler}>{createAccount} </button>
    </div>)
}