import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../assets/meron2.jpg";
import farm from "../assets/farm.png";
import order from "../assets/order.png";
import product from "../assets/product.png";
import reviews from "../assets/reviews.png";

class FarmerTab extends Component {
  render() {
    return (
      <div>
          <div
            class="font-sans "
            style={{
              alignItems: "center",
              textAlign: "center",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <br></br>
            <div
              class="container"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              {" "}
              <br></br>
              <div class="row">
                <div class="col" style={{ marginLeft: "5px" }}>
                  <img
                    src={Img}
                    style={{
                      display: "block",
                      borderRadius: "0%",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      maxWidth: "320px",
                      maxHeight: "300px",
                    }}
                  ></img>
                </div>
                <div class="col">
                  <p class="text-4xl text-green-600 font-black border-2 border-green-200">
                    Melon Farmer Shop
                  </p>
                  <br></br>
                  <p class="text-1xl text-left">
                    รายการสินค้า : 356 <br></br>
                    ที่ขายได้ : 1118<br></br>
                    จังหวัด : เชียงราย<br></br>
                    เบอร์: 092 569 4791 <br></br>
                    คะแนน : 4.8 (การให้คะแนนทั้งหมด 23)
                  </p>

                  <div class="flex justify-left ">
                    <div class="flex items-center mt-2 mb-4">
                      <svg
                        class="mx-1 w-4 h-4 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        class="mx-1 w-4 h-4 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        class="mx-1 w-4 h-4 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        class="mx-1 w-4 h-4 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg
                        class="mx-1 w-4 h-4 fill-current text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div
                class="row"
                style={{ marginLeft: "5px", marginRight: "5px" }}
              >
                <a
                  class=" col-sm-3 bg-green-700 font-bold text-gray-100 btn-lg btn-block border  border-transparent rounded hover:bg-white border-5 border-green-700 hover:text-green-700"
                  href="/Store"
                >
                  <img
                    src={farm}
                    style={{
                      maxWidth: "50px",
                      maxHeight: "50px",
                    }}
                  ></img>
                  เกี่ยวกับฟาร์ม
                </a>

                <a
                  class=" col-sm-3 bg-green-700 font-bold text-gray-100 btn-lg btn-block border  border-transparent rounded hover:bg-white border-5 border-green-700 hover:text-green-700"
                  href="/ProductFarm"
                >
                  <img
                    src={product}
                    style={{
                      maxWidth: "50px",
                      maxHeight: "50px",
                    }}
                  ></img>
                  รายการสินค้า
                </a>

                <a
                  class=" col-sm-3 bg-green-700 font-bold text-gray-100 btn-lg btn-block border  border-transparent rounded hover:bg-white border-5 border-green-700 hover:text-green-700"
                  href="/OrderFarm"
                >
                  <img
                    src={order}
                    style={{
                      maxWidth: "50px",
                      maxHeight: "50px",
                    }}
                  ></img>
                  คำสั่งซื้อ
                </a>

                <a
                  class=" col-sm-3 bg-green-700 font-bold text-gray-100 btn-lg btn-block border  border-transparent rounded hover:bg-white border-5 border-green-700 hover:text-green-700"
                  href="/ReviewFarm"
                >
                  <img
                    src={reviews}
                    style={{
                      maxWidth: "50px",
                      maxHeight: "50px",
                    }}
                  ></img>
                  การรีวิว
                </a>
              </div>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>

    );
  }
}
export default FarmerTab;
