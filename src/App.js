import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import { useState } from "react";
// import { MyContext } from "../../App";
import { useContext, useEffect } from "react";

function App() {

const[isHeaderFooterShow ,setisHeaderFooterShow]= useState(true);
const values={
  isHeaderFooterShow,
  setisHeaderFooterShow
}
  return (
    <BrowserRouter>
    {/* <MyContext.Provider value={values}> */}
    {
      isHeaderFooterShow ===true && <Header/>
    }
    
     <Routes>
       <Route path="/" exact={true} element={<Home/>}/>
       <Route path="/Product/:id" exact={true} element={<ProductDetails/>}/>
       <Route path="/cart" exact={true} element={<Cart/>}/>
       <Route path="/signIn" exact={true} element={<SignIn/>}/>
     </Routes>
     {/* </MyContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
