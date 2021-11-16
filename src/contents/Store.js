import React, { Component } from "react";
import Topnav from "../components/Topnav";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import bgImg from "../assets/bg.jpg";
import Img from "../assets/meron2.jpg";
import farm from "../assets/farm.png";
import order from "../assets/order.png";
import product from "../assets/product.png";
import reviews from "../assets/reviews.png";

class Store extends Component {
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
            height: "100%",
          }}
        >
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
                      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
                  href=""
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
                  href=""
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
                  href=""
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
                  href=""
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
            <br></br>
            <br></br>
            <div
              class="container"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <p class="pt-5 text-4xl text-green-600 font-black ">
                เกี่ยวกับฟาร์ม
              </p>
              <br></br>
              <div class="row">
              <div class="col"
              >
                <div className="google-map-code border-5 border-green-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                    width="320"
                    height="400"
                    frameborder="0"
                    style={{ border: 0 }}
                    tabindex="0"
                  ></iframe>
                </div>
                <br></br>
              </div>

              <div class="col">
              <br></br><br></br><br></br>
              <p class="pt-3 text-2xl font-black"
               style={{
              alignItems: "center",
              textAlign: "center",
              marginLeft: "20px",
              marginRight: "20px",
              }} >
                "เมล่อนนนน ฟาร์มของเราใส่ใจ พร้อมถึงมือคุณ คุณภาพดี ราคาคุณภาพ ฟาร์ม เมล่อน ฟาร์ม เมล่อน คลองสาม ฟาร์มผักออแกนิก ฟาร์มปทุมธานี ... เก็บสดๆ จากฟาร์มที่อยู่ภายในพื้นที่ร้าน นำมาปรุงประกอบเป็นสารพัดเมนู"
              </p>
              <br></br>
              </div>
              
              <br></br>
            </div>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
export default Store;
