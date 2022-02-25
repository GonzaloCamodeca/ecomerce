import {createContext, useState} from "react"

 export const CartContext = createContext();

 const CartContextProvider = ({children}) => {
     const [cartList, setCartList] = useState([]);

     const addToCart = (item, quantity) =>{
         if(isInCart(item.id)){
             for (const products of cartList){
                 if (products.id === item.id){
                     products.qty += quantity
                 }
             }
         } else {

             setCartList([ 
                 ...cartList,{
                    key:item.id,
                  id: item.id,
                  category:item.category,
                  title: item.title,
                  thumb:item.thumb,
                  normalPrice:item.normalPrice,
                  itemQty:item.itemQty,
                  qty: quantity
              }])
         }
     }
    const deleteProduct = (id) =>{
        setCartList(cartList.filter((item) => item.id !== id));
    }
    const clear = () =>{
        setCartList([]);
    }
    const isInCart = (idProduct) => {
        return cartList.find((item) => item.id === idProduct) ? true : false;
   }
   const calcItemsQty = () => {
       let qtys = cartList.map(item => item.itemQty);
       return qtys.reduce(((previusValue, currentValue)=> previusValue + currentValue), 0)
   }
     return(
        <CartContext.Provider value={{cartList, addToCart, deleteProduct, clear, calcItemsQty}}>
            {children}
        </CartContext.Provider>
     )
 }
 export default CartContextProvider;