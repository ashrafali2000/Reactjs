import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';
import AllProducts from './components/allProducts/AllProducts';
function App() {
  const [account, checkAccount] = useState(false);
  const [account1, checkAccount1] = useState(false);
  const [headerSec, setHeaderSec] = useState(true);
  const [product, setProduct] = useState(false);
  const setAccount = () => {
    checkAccount(true);
    setHeaderSec(false);
  }
  const setSignAccount = () => {
    checkAccount1(true);
    setHeaderSec(false);
  }
  const showProducts = () => {
    setProduct(true)
    checkAccount1(false)
  }
  return (
    <div className="App">
     {headerSec ? <Header setAccount = {setAccount} setSignAccount ={setSignAccount}></Header>: ""}
     {account? <SignUp /> : ""}
    {account1? <SignIn showProducts={showProducts}/> : ""}
     {product? <AllProducts /> : ""}
    </div>
  );
}

export default App;
