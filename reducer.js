import {CLEAR_CART,REMOVE,DECREESE,INCREESE} from "./actions"
import CartItem from "./CartItem"
const reducer=(state,action)=>{
    if(action.type===CLEAR_CART){
        return {...state,cart:[]}
    }
    if(action.type===REMOVE){
        return {...state, cart:state.cart.filter((cartItem)=>cartItem.id !==action.payload.id)}
    }
    if(action.type===DECREESE){
        if(action.payload.amount===1){
            console.log("its jus one")
            return {...state, cart:state.cart.filter((cartItem)=>cartItem.id !==action.payload.id)}
        }
        let tempCart=state.cart.map((cartItem)=>{
            if(cartItem.id===action.payload.id){
             cartItem= {...cartItem,amount:cartItem.amount-1}
            }
            
            return cartItem
           
           
        });
        return {...state,cart:tempCart};
        
      
      
    }
    if(action.type===INCREESE){
        let tempCart=state.cart.map((cartItem)=>{
            if(cartItem.id===action.payload.id){
             cartItem= {...cartItem,amount:cartItem.amount+1}
            }
            return cartItem
           
        });
        return {...state,cart:tempCart};
      }
   
    return state
  }
  export default reducer