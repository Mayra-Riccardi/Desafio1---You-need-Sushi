import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ItemDetails.css"
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="item shadow mb-4 card card-container shadow p-3 mb-5 bg-body rounded">
          <img src={product.img} alt="Same at value" />
            <h4 className="nombre">
              {product.name} - {product.brand}
            </h4>
            <p className="texto">{product.package}</p>
            <p className="texto">Precio ${product.price}</p>
            <Link className="btn btn-info btn-sm btn-ver" to={`/item/${product.id}`}>Más Info</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Item;
