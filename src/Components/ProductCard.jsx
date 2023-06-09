import React from 'react';
import "../Styles/Home.scss";

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
    <div className="productCard">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add to Cart
      </button>
    </div>
  );


export default ProductCard;
