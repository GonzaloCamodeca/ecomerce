import { useState } from "react";

const ItemCount = ({stock}) => {
   const [item, setItem] = useState(1);
   const increment = () =>{
       if(item >= 1 && item < stock){
           setItem(item + 1)
       }
    }
    const decrese = () =>{
        if(item > 1){
            setItem(item - 1)
        }
    }
    return (
    <>
    <button className="btn" onClick={increment}>+</button>
    <p>{item} Cantidad</p>
    <button className="btn" onClick={decrese}>-</button>
    <hr />
    </>
    );
}
export default ItemCount