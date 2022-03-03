import ItemDetails from "../ItemDetails/ItemDetails"
// import customFetch from "../../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from "../../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
// import juegos from "../../utils/juegos"

const ItemDetailContainer = () =>{
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlParams = useParams();
  

  useEffect(() => {
    const firestoreFetch = async () => {
      const querySnapshot = await getDocs(collection(db, "juegos"));
      return querySnapshot.docs.map( document => ({
        id: document.id,
        ...document.data()
      }
      ))
    }
    firestoreFetch()
    .then(result => setItems(result))
    .then(() => setLoading(false))
    .catch(err => console.log(err))
  }, [urlParams.id]);

  return(
  <> 
    <div className="row" style={{width:"100%"}}>
      {loading ? <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_600/https://codigofuente.io/wp-content/uploads/2018/09/progress.gif' alt='Cargando...'></img>:
        <ItemDetails items={items} />}
    </div>
  </>
        );
}
export default ItemDetailContainer;