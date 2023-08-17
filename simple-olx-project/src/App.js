import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import SignUp from './components/signUp/SignUp';
function App() {
  const [account, checkAccount] = useState(false);
  const [headerSec, setHeaderSec] = useState(true);
  const setAccount = () => {
    checkAccount(true);
    setHeaderSec(false);
  }
  return (
    <div className="App">
     {headerSec ? <Header setAccount = {setAccount}></Header>: ""}
     {account? <SignUp /> : ""}
    </div>
  );
}

export default App;
