import ItemList from "../ItemList/ItemList";
const {juegos} = require("../../utils/juegos")
const ItemListContainer = () =>{
  return(
    <>
      <div className="row">
        <ItemList juegos={juegos}/>
      </div>
    </>
  )
}

export default ItemListContainer;