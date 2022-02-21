import { Link } from "react-router-dom";
// import ItemCount from "../ItemCount/ItemCount"
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
                      <hr/>
                    <h6 className="text-center">Precio: {props.normalPrice}$</h6>
                    <p className="text-center">Available units <strong> {props.stock}</strong></p>
                    <p>Plataform <strong>{props.category}</strong></p>
                    {/* <div className="counter">
                      <ItemCount stock={5} />
                    </div> */}
                    </div>
                    <hr/>
                    <button className="btn btn-dark">
                    <Link className="a" to={`/item/${props.id}`}>Details</Link>
                    </button>
                </div>
              </div>
    </>
)}

export default juegos;