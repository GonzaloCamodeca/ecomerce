import { useContext } from "react";
import  {CartContext}  from "../../Context/CartContext";
import { Link } from 'react-router-dom';
// import styles from '../Cart/Cart.module.css';
const Cart = () => {
    const cartList  = useContext(CartContext);
    return(
      <>
      <div className="flex justify-between border-b pb-8">
        <h1 className="card-title ub">Cart ({cartList.calcItemsQty()})</h1>
        
        </div>
      <div className='flex mt-10 mb-5 w-4/5'>
      <h3 className='font-semibold text-gray-600 text-xs uppercase w-4/5'>
              Product Details
            </h3>
            <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
              Quantity
            </h3>
            <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
              Price
            </h3>
            <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
              Total
            </h3>
      </div>
        {
          (cartList.cartList.length > 0)
          ? <button  className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white margin'  onClick={cartList.clear}>Buy All</button>
          : <h5 className="text-center">Your cart is empty</h5>
        }
        {
          cartList.cartList.length > 0 &&
          cartList.cartList.map(item =>(
            <div className="container mx-auto mt-t" key={item.id}>
              <div className="flex w-5/5">
              <div className="justify-between border-b pb-8">
                <div className="w-autos">
                <img className="h-24" src={item.thumb} alt="imagenGames" />
                </div>
                </div>
                <div className='flex flex-col justify-between ml-4 flex-grow'>
                <span className="font-bold text-sm">
                {item.title}
                <span className='text-red-500 text-xs'> {item.category}</span>
                </span>
                </div>
              <p className="">Units <strong>{item.qty}</strong></p>
              <h6 className="text-center w-1/5 unitPrice  font-semibold text-sm">Unit Price: {item.normalPrice}$</h6>
              <h6 className="text-center w-1/5 font-semibold text-sm">Total Price: {item.normalPrice*item.qty}$</h6>
                    <button className="font-semibold hover:text-red-500 text-gray-500 text-xs delete" onClick={() => cartList.deleteProduct(item.id)}>
                       Delete item
                    </button>
              </div>
          </div>
            ))}
              <Link
            to='/'
            className='flex font-semibold text-indigo-600 text-sm mt-10'
          >
            <svg
              className='fill-current mr-2 text-indigo-600 w-4'
              viewBox='0 0 448 512'
            >
              <path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
            </svg>
            Continue Shopping
          </Link>
      </>
)}
export default Cart;

