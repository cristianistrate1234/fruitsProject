import React from "react";

const ProductList = ({ img, name, price }) => {
  return (
    <li className="product-block-list d-flex align-items-center">
      <img
        src={process.env.PUBLIC_URL + img}
        alt={name}
      />
      <div className="d-flex align-content-center flex-column">
        <h3>Cauliflower</h3>
        <p>{price + "$"}</p>
      </div>
    </li>
  );
};

export default ProductList;
