import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FarmerTab from "../components/FarmerTab";
import Topnav from "../components/Topnav";
import bgImg from "../assets/bg.jpg";

class ProductFarm extends Component {
    render() {
      return (
        <div>
         <Topnav />

         <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
          }}
        >
            <FarmerTab/>
            <br></br>
          <div
            class="container"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p class="pt-5 text-4xl text-green-600 font-black ">ProductFarm</p>
            <br></br>
            <div class="row">
              <div class="col"></div>
              <br></br>
            </div>
          </div>

          <br></br>
            </div>
          </div>
  
      );
    }
  }
  export default ProductFarm;
  