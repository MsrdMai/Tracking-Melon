import React, { useState } from "react";
import Topnav from "../components/Topnav";
import ProductList from "../components/ProductList";
import Axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";

const Product = () => {
  return (
    <div>
      <Topnav />
      <ProductList />
    </div>
  );
};
export default Product;
