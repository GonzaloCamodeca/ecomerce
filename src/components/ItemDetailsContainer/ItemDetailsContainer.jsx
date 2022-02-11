import ItemDetails from "../ItemDetails/ItemDetails"
const Item = (props) =>{
     return(
        <>
        {props.items.map(item =>
          <Item
            key={item.id}
           id_game={item.id_game}
           title={item.title}
           thumb={item.thumb}
           normalPrice={item.normalPrice}
           description={item.description}
           cover_size={item.cover_size}
           />)}
        </>
    )
}
export default ItemDetails;