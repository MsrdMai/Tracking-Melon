import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FarmerTab from "../components/FarmerTab";
import Topnav from "../components/Topnav";
import bgImg from "../assets/bg.jpg";
import cancel from "../assets/cancel.png";
import megaphone from "../assets/megaphone.png";
import machita from "../assets/melon/machita.jpg";

class ProductDetail extends Component {
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
            class="container  border-4 border-gray-600"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <div class="row">
              <div class="col-lg-1"></div>
              <div class="col-lg-4">
                <br></br>
                <br></br>
                <img
                  src={machita}
                  style={{
                    Width: "100%",
                    Height: "100%",
                    alignItems: "center",
                  }}
                ></img>
              </div>
              <div class="col-lg-1"></div>
              <div class="col-lg-5 col-12">
                <br></br>
                <div class="row">
                  <div class="col">
                    <p class="text-3xl text-red-800 font-black items-center">
                      มาชิตะแกะลาย
                    </p>
                  </div>
                  <div class="col">
                    <p class=" text-2xl text-green-800 font-black items-center border-4 border-green-800">
                      แกะสลัก
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <br></br>
                    <p class="text-xl text-gray-800 text-left">ขนาด : 1.5 kg</p>
                    <br></br>
                    <p class="text-lg text-gray-800 text-left">เนื้อ : ส้ม</p>
                    <br></br>
                    <p class="text-lg text-gray-800 text-left">
                      จำนวนในคลัง : 5
                    </p>
                  </div>
                  <div class="col">
                    <br></br>
                    <p class="text-lg text-gray-800 text-left">
                      คุณภาพ : รอการเติบโต
                    </p>
                    <br></br>
                    <p class="text-lg text-gray-800 text-left">ราคา : 450 ฿</p>
                    <br></br>
                    <p class="text-lg text-gray-800 text-left">
                      รอบตัด : 5/9/64
                    </p>
                  </div>
                </div>
                <div class="col">
                  <p class="pt-3 text-lg text-gray-800 text-left">
                    รายละเอียดสินค้า : เนื้อส้ม ลายชัดเจน นูนหนา เนื้อฉ่ำ
                    หวานหอม จากฟาร์มออลแกรนิต
                  </p>
                  <br></br>
                  <a
                    class="col-12 btn btn-light btn-lg btn-block bg-gray-300 text-red-900 hover:border-2 hover:border-red-500 hover:text-red-500"
                    href=""
                  >
                    <img
                      src={cancel}
                      width="30"
                      height="30"
                      style={{
                        display: "inline-block",
                      }}
                    />
                    ยกเลิกสินค้า
                  </a>
                  <a
                    class="col-12 btn btn-light btn-lg btn-block bg-yellow-500 text-gray-900 hover:border-2 hover:border-yellow-500 hover:text-yellow-500"
                    href=""
                  >
                    <img
                      src={megaphone}
                      width="30"
                      height="30"
                      style={{
                        display: "inline-block",
                      }}
                    />
                    โปรโมทสินค้า
                  </a>
                </div>
              </div>
            </div>
            <br></br>
          </div>

          <br></br>
        </div>
      </div>
    );
  }
}
export default ProductDetail;
