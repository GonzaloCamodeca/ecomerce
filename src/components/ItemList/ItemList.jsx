import Item from "../Item/Item.jsx"
const ItemList = (props) =>{
     return(
        <>
        {props.items.map(item =>
          <Item
            key={item.id}
           id_game={item.id_game}
           title={item.title}
           description={item.description}
           thumb={item.thumb}
           normalPrice={item.normalPrice}
           cover_size={item.cover_size}
           />)}
        </>
    )
}
export default ItemList;