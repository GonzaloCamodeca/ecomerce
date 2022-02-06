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
    <p>{item} MG</p>
    <button className="btn" onClick={increment}>Like</button>
    <button className="btn" onClick={decrese}>DISLike</button>
    <hr />
    </>
    );
}
export default ItemCount