import { useState } from "react";
import styles from "../ItemCount/ItemCount.module.css"
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
    <div className={styles.container}>
        <div className={styles.controls}>
            <button className={styles.designe_btn} onClick={increment}>+</button>
            <div>{item}</div>
            <button className={styles.designe_btn}  onClick={decrese}>-</button>
        </div>
    </div>
    <hr />
    </>
    );
}
export default ItemCount