import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
const juegos = (props) => {
return(
    <>
    <div className="col card-group mt-2 p-4 container h-100">
                <div
                  className=" card mb-3 mx-auto h-100 ms-4"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className="card bg-dark text-white">
                      <img className="imagenes" src={props.thumb} alt="imagenGames" />
                    </div>
                      <h5 className="card-title text-center m-3">
                      {props.title}
                      </h5>
                    <p className="text-center">Precio: {props.normalPrice}$</p>
                    <div className="counter">
                      <ItemCount stock={5} />
                    </div>
                    </div>
                    <button className="btn btn-dark">
                    <Link to={`/item/${props.id}`}>Details</Link>
                    </button>
                </div>
              </div>
    </>
)}

export default juegos;