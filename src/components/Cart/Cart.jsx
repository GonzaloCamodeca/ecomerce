import { useContext } from "react";
import  {CartContext}  from "../../Context/CartContext";
const Cart = () => {
    const cartList  = useContext(CartContext);
    return(
      <>
        <h2 className="card-title text-center">Cart</h2>
        { 
          cartList.cartList.map(item =>(
          <div className=" card mb-2 mx-auto h-100 ms-4"
            style={{ width: "18rem" }}>
            <div className="card-body">
              <div className="card bg-dark text-white">
                <img className="imagenes" src={item.thumb} alt="imagenGames" />
              </div>
                <h5 className="card-title text-center m-3">
                {item.title}
                </h5>
                <hr/>
              <h6 className="text-center">Precio: {item.normalPrice}$</h6>
              <p className="text-center">Units <strong>{item.qty}</strong></p>
              <button
                      onClick={() => cartList.removeItems(item.id)} >
                      Remove all products
                    </button>
                    <button onClick={() => cartList.deleteProduct(item.id)}>
                       Delete item
                    </button>
              </div>
              <hr/>
          </div>
            ))}
      </>
)}
export default Cart;

