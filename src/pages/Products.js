import React, { useState } from "react";
import Product from "../components/Product";

const Products = () => {

const myProducts =[
  {
    id: 1,
    name: "Mack's Ultra Soft Foam Earplugs",
    price: '9.00',
    image: 'https://m.media-amazon.com/images/I/61oq04-MRiL._AC_SX425_.jpg',
    link: "https://amzn.to/3SE9K1R",
    category: "home",
  }
]

  // const [products, setProducts] = useState([])


  return (
    <div>
      <section id="products" class="bg-secondary py-3">
      <h1>this is products page</h1>
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


            {/* another product */}
            <Product product={myProducts[0]} />



            {/* <!-- boots --> */}
            <div class="col mb-5">
              <div class="card h-100">
                {/* <!-- Product image--> */}

                <img
                  class="card-img-top"
                  src="https://m.media-amazon.com/images/I/81zMcBMvfGS._AC_UY395_.jpg"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                  <div class="text-center">
                    {/* <!-- Product name--> */}
                    <h5 class="fw-bolder">Leather Work Boots</h5>
                    {/* <!-- Product price--> */}
                    65$
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a
                      class="btn btn-outline-dark mt-auto"
                      href="https://amzn.to/3bEH6hc"
                    >
                      buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
