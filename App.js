import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore} from "redux"
import reducer from "./components/reducer";
import { Provider } from "react-redux";

function App() {
  //setup initial state
  const initialState={
    cart:cartItems,
    total:100,
    amount:5
  }
  // cart setup
 
 
 
  const store =createStore(reducer,initialState);

  return (
    <Provider store={store}>
      <Navbar/>
      <CartContainer />
    </Provider>
  );
}

export default App;
