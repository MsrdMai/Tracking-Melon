import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FarmerTab from "../components/FarmerTab";
import Topnav from "../components/Topnav";
import bgImg from "../assets/bg.jpg";
import machita from "../assets/melon/machita.jpg";

class ProductFarm extends Component {
  render() {
    return (
      <div>
        <Topnav />

        <div
         class="font-sans "
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          <FarmerTab />
          <br></br>
          <div
            class="container bg-gray-300"
            style={{
              borderRadius: "10px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
              <br></br>
            <p class="pt-4 pb-4 pl-10 text-2xl text-yellow-900 font-black text-left ">
              รายการสินค้า
            </p>
            <hr></hr>
            <br></br>
           

            <form>
              <div class="form-group">
                <div class="row">
                  <div class="col-lg-1"></div>
                  <div class="col-lg-4 col-12">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="ค้นหา ชื่อสินค้า"
                    />
                  </div>
                  <div class="col-lg-4 col-12">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>เลือกประเภทสินค้า</option>
                      <option value="1">รายการขาย</option>
                      <option value="2">รายการจอง</option>
                    </select>
                  </div>
                  <div class="col-lg-2 col-12">
                    <button type="submit" class="btn btn-primary col-12">
                      ค้นหา
                    </button>
                  </div>
                  <div class="col-lg-1"></div>
                </div>
              </div>
            </form>
            <br></br>

            <br></br>
            <div class="row  grid grid-cols-3 gap-4 flex justify-center">
            <div class="pt-4 px-4 pb-2 max-w-xs bg-white rounded-lg shadow-md">
                <img
                  class="block object-scale-down mx-auto h-48 rounded-lg sm:mx-0 sm:flex-shrink-0"
                  src={machita}
                  alt="Product"
                />
                <div class="text-center space-y-2">
                  <div class="space-y-0.5">
                    <p class="mt-2 text-lg text-black font-semibold">
                      มาชิตะแกะลาย
                    </p>

                    <div class="flex justify-between mt-2 mx-4">
                      <p class="text-red-500 font-medium">250 บาท</p>
                      <p class="text-gray-500 font-medium">10 ชิ้น</p>
                    </div>
                    <div class="flex justify-between mt-2 mx-4">
                      <p class="text-green-500 font-medium">
                      ประเภท
                      </p>
                      <p class="text-gray-500 font-medium">รายการจอง</p>
                    </div>
                  </div>
                  <br></br>
                  <a
                    class="pt-1 pb-2 px-24 py-2 mt-2 text-sm text-black font-semibold rounded-lg
                     bg-yellow-400 hover:bg-yellow-600"
                    href="/ProductDetail"
                  >
                    รายละเอียด
                  </a>
                  <br></br>
                  <br></br>
                </div>
              </div>

              <div class="pt-4 px-4 pb-2 max-w-xs bg-white rounded-lg shadow-md">
                <img
                  class="block object-scale-down mx-auto h-48 rounded-lg sm:mx-0 sm:flex-shrink-0"
                  src={machita}
                  alt="Product"
                />
                <div class="text-center space-y-2">
                  <div class="space-y-0.5">
                    <p class="mt-2 text-lg text-black font-semibold">
                      มาชิตะแกะลาย
                    </p>

                    <div class="flex justify-between mt-2 mx-4">
                      <p class="text-red-500 font-medium">250 บาท</p>
                      <p class="text-gray-500 font-medium">10 ชิ้น</p>
                    </div>
                    <div class="flex justify-between mt-2 mx-4">
                      <p class="text-green-500 font-medium">
                      ประเภท
                      </p>
                      <p class="text-gray-500 font-medium">รายการจอง</p>
                    </div>
                  </div>
                  <br></br>
                  <a
                    class="pt-1 pb-2 px-24 py-2 mt-2 text-sm text-black font-semibold rounded-lg
                     bg-yellow-400 hover:bg-yellow-600"
                    href="/ProductDetail"
                  >
                    รายละเอียด
                  </a>
                  <br></br>
                  <br></br>
                </div>
              </div>


              <div class="pt-4 px-4 pb-2 max-w-xs bg-white rounded-lg shadow-md">
                <img
                  class="block object-scale-down mx-auto h-48 rounded-lg sm:mx-0 sm:flex-shrink-0"
                  src={machita}
                  alt="Product"
                />
                <div class="text-center space-y-2">
                  <div class="space-y-0.5">
                    <p class="mt-2 text-lg text-black font-semibold">
                      มาชิตะแกะลาย
                    </p>

                    <div class="flex justify-between mt-2 mx-4">
                      <p class="text-red-500 font-medium">250 บาท</p>
                      <p class="text-gray-500 font-medium">10 ชิ้น</p>
                    </div>
                    <div class="flex justify-between mt-2 mx-4">
                      <p class="text-green-500 font-medium">
                      ประเภท
                      </p>
                      <p class="text-gray-500 font-medium">รายการจอง</p>
                    </div>
                  </div>
                  <br></br>
                  <a
                    class="pt-1 pb-2 px-24 py-2 mt-2 text-sm text-black font-semibold rounded-lg
                     bg-yellow-400 hover:bg-yellow-600"
                    href="/ProductDetail"
                  >
                    รายละเอียด
                  </a>
                  <br></br>
                  <br></br>
                </div>
              </div>






              <br></br>
            </div>

            <br></br>
          </div>

          <br></br>
        </div>
      </div>
    );
  }
}
export default ProductFarm;
