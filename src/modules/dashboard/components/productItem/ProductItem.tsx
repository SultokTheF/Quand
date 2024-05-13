import React from "react";

import "./ProductItem.css";

import { BsArrowRightShort } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

const ProductItem: React.FC = () => {
  return (
    <>
      <div className="singleOffer">
        <div className="offerBody">
          <div className="price">
            <h4>Копилка</h4> <br />
            <h4></h4>
          </div>

          <div className="amenities flex">
            <div className="singleAmenity flex">
              {/* <FaTasks className="icon" /> */}
              <small> active tasks</small>
            </div>
          </div>

          <div className="location flex">
            <MdLocationOn className="icon" />
            <small></small>
          </div>
          <a className="btn flex" href={`/projects/`}>
            Go to Project <BsArrowRightShort className="icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductItem;