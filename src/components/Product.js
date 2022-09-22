import React from "react";

const Product = (props) => {

  return (
    <div>
      <div class="card h-100">
        {/* <!-- Product image--> */}

        <img class="card-img-top" src={props.product.image} alt="..." />

        {/* <!-- Product details--> */}
        <div class="card-body p-4">
          <div class="text-center">
            {/* <!-- Product name--> */}
            <h5 class="fw-bolder">{props.product.name}</h5>
            {/* <!-- Product price--> */}
            {props.product.price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <a
              class="btn btn-outline-dark mt-auto"
              href={props.product.link}
            >
              buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
