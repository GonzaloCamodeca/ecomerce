import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// const {juegos} = require("../../utils/juegos")

const ItemListContainer = () => {
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
  }, [urlParams.id_game]);

  return (
    <>
      <div className="row" style={{ width: "100%" }}>
        {loading ? (
          <img
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_600/https://codigofuente.io/wp-content/uploads/2018/09/progress.gif"
            alt="Cargando..."
          ></img>
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </>
  );
};
export default ItemListContainer;
