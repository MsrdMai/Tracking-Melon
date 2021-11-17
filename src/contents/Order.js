import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FarmerTab from "../components/FarmerTab";
import Topnav from "../components/Topnav";
import bgImg from "../assets/bg.jpg";


class Order extends Component {
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

            </div>
        </div>

    );
  }
}
export default Order;
