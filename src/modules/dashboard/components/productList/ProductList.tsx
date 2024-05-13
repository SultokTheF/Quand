import React from "react";
import "./ProductList.css";

import ProductItem from "../productItem/ProductItem";

const ProductList: React.FC = () => {
  return (
    <>
      <div className='project-list'>
        <section className='offer section container'>
          <div className="secContainter">
            <div className="secIntro">
              <h2 className='secTitle'>
                All the current projects
              </h2>
              {/* <div className="buttons flex">
                <a href="projects/create" className='btn'>Create Project</a>
                <button className='btn' onClick={setMyProjects}>My Projects</button>
                <button className='btn' onClick={setAssingedProjects}>Assigned Projects</button>
              </div> */}
            </div>

              <ProductItem />
              <ProductItem />
              <ProductItem />
            <br />
            <br />
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductList;