
import React, { useState, useEffect } from 'react';
import axios from "axios";
import ItemCount from "../ItemCount/ItemCount"
const ItemListContainer= () => {

    const [ games, setGames ] = useState([]);

    useEffect(() => {
      axios.get(
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
      ).then(function (response) {
        const juegos = response.data.map(
          ( juegosArray, index) =>
            (juegosArray = (
              <div className="col card-group mt-2 p-4 container h-100" key={index}>
                <div
                  className=" card mb-3 mx-auto h-100 ms-4"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className="card bg-dark text-white">
                      <img src={juegosArray.thumb} alt="imagenGames" />
                    </div>
                      <h5 className="card-title text-center m-3">
                      {juegosArray.title}
                      </h5>
                    <p className="text-center">Precio: {juegosArray.normalPrice}$</p>
                    <div className="text-center">
                    <ItemCount stock={5} />
                    <button className="btn">Comprar</button>
                    </div>
                    </div>
                </div>
              </div>
            ))
        );
        setGames(juegos);
      });
    }, []);

    return(
      <div className="row">
    <div className="container">
      <div className="row">{games}</div>
    </div>
  </div>
)
 }
 export default ItemListContainer;