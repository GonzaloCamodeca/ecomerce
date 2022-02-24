import ItemCount from "../ItemCount/ItemCount";
import Checkout from "../Checkout/Checkout"
import { useContext, useState } from 'react';
import { CartContext } from "../../Context/CartContext";
const ItemDetails = ({ items }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [isCheckout, setIsCheckout] = useState(false);
  const test = useContext(CartContext);
  const onAdd = (quantity) => {
       alert(`${quantity} Units successfully added to cart`);
       console.log(quantity);
       setItemQuantity(quantity);
      setIsCheckout(true);
      test.addToCart(items,quantity);
  }
  return (
    <>
      <div className="col card-group mt-2 p-4 container h-100">
        <div
          className=" card mb-3 mx-auto h-100 ms-4"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <div className="card bg-dark text-white">
              <img className="img_details" src={items.thumb} alt="imagenGames" />
            </div>
            <h4 className="card-title text-center m-3">{items.title}</h4>
            <p className="text-left colorLetra m-0">
              Description: {items.description}
            </p>
            <h5 className="text-center">Precio: {items.normalPrice}$</h5>
          </div>
            <div>
            {isCheckout ?
                    <Checkout cantidad={itemQuantity}></Checkout>
                    :
                    <ItemCount stock={items.stock} initial={itemQuantity} onAdd={onAdd}></ItemCount>}
            </div>
        </div> 
      </div>
    </>
  );
};

export default ItemDetails;
