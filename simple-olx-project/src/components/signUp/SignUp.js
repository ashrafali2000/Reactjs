// import fs from "fs";
// import path from "path";
// const filePath = path.join(process.cwd(), "public", "database.json" );
import { useState } from "react";
import "./SignUp.css"
import { useRef } from "react"
export default function SignUp (){
    const [checkAccount1, setCheckAccount1]  = useState(false);
    const [checkAccount2, setCheckAccount2]  = useState(false);
    const [checkAccount3, setCheckAccount3]  = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const numberRef = useRef();
    
    const submitHandler = (event) => {
        event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const number = numberRef.current.value;
    const obj = {name,email, password};
    let bool1 = false;
    let bool2= false;
    if(name === "" && email === ""&& password === ""){
        setCheckAccount1(true);
    }
    else{
        for(let a = 1; a <= 20; a++) {
          const usr = localStorage.getItem(a.toString());
          if(usr) {
              const myCk = JSON.parse(usr);
              console.log(myCk)
              if(myCk.email === email ) {
                bool1 = true;
            }
            
            if(bool1) {
                setCheckAccount2(true)
                break;
                }
            } 

            else{
                localStorage.setItem(`${number}`,JSON.stringify(obj) );
                setCheckAccount3(true)
                break;
            }
            
          }

    }

    }


    return (<div>
        <form onSubmit={submitHandler}>
          <div><label htmlFor="name">Name</label><br></br>
            <input type="text" id="name" ref={nameRef}></input></div>
            <div> <label htmlFor="email">E-mail</label><br></br>
            <input type="email" id="email" ref={emailRef}></input></div>
            <div>  <label htmlFor="password">Password</label><br></br>
            <input type="password" id="password" ref={passwordRef}></input></div>
            <div>  <label htmlFor="number">Enter Number for Unique Account (1-20)</label><br></br>
            <input type="number" id="number" min={1} max={20} ref={numberRef}></input></div>
        {checkAccount1? <p style={{color:"#f00" ,fontSize:20,fontWeight:600}}>Please fill out the input fields</p> : checkAccount2 ? <p style={{color:"#f00",fontSize:20,fontWeight:600}}>Account already exist</p> : checkAccount3 ? <p style={{color:"#2e8024",fontSize:20,fontWeight:700}}>Account created Successfully</p> :"" }
            <button type="submit">Submit</button>
        </form>
    </div>)
}