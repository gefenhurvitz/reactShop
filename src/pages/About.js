import React from "react";

const About = () => {
  return (
    <div className="bg-dark">
      <section id="about" class="bg-primary py-3">
        <div class="container text-center">
          <h2 class="text-align-center">About</h2>
          <i class="fa fa-car"></i>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            corporis error doloribus, perspiciatis qui id recusandae numquam
            vitae illum aliquam?
          </p>
          <div class="row">
            <div class="col">
              <h3>about me</h3>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae iure quisquam quas suscipit accusantium itaque nulla
                eum aliquam laborum. Tempore, reprehenderit maiores. Dolores,
                cupiditate sint.
              </h6>
            </div>
            <div class="col">
              <h3>pic me</h3>
              <img src="https://picsum.photos/200/200" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
