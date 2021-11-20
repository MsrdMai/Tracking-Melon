import React, { Component } from "react";
import Topnav from "../components/Topnav";
import meron2 from "../assets/meron2.jpg";
import Img1 from "../assets/SlideImg/img1.jpg";
import Img2 from "../assets/SlideImg/img2.jpg";
import Img3 from "../assets/SlideImg/img3.jpg";
import melon1 from "../assets/melon/kimoji.jpg";
import melon2 from "../assets/melon/machita.jpg";
import melon3 from "../assets/melon/momiji.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

class Home extends Component {
  render() {
    return (
      <div class="App w-full bg-yellow-200">
        <Topnav />

        {/* SlideImage */}
        <Carousel>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={Img2} alt="First slide" />
            <Carousel.Caption>
              <h3>ทดลองที่1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={750}>
            <img className="d-block w-100" src={Img1} alt="Second slide" />
            <Carousel.Caption>
              <h3>ทดลองที่2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Img3} alt="Third slide" />
            <Carousel.Caption>
              <h3>ทดลองที่3</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <br />
        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-4 bg-white rounded-lg">
          <div className="input-container flex justify-center px-12">
            <h1 class="font-extrabold text-3xl font-heading text-green-800 md:h-full md:w-48">
              เมล่อนขายดี
            </h1>
          </div>
          <br />
          <div class="container-sm">
            <div class="row grid grid-cols-3 gap-4 flex justify-center object-scale-down">
              <div class="pt-4 px-4 pb-2 max-w-xs bg-gray-300 rounded-lg shadow-md">
                <img
                  class="object-cover block object-scale-down mx-auto h-48 rounded-lg sm:mx-0 sm:flex-shrink-0"
                  src={melon1}
                  alt="Product"
                />
                <div class="space-y-2">
                  <div class="space-y-0.5">
                    <p class="text-center mt-2 text-2xl text-green-800 font-extrabold">
                      เมล่อนคิโมจิ
                    </p>
                    <ul class="list-inside md:list-disc text-gray-600 font-medium text-left px-10 pt-2">
                      <li>
                        เนื้อเขียว
                      </li>
                      <li> 
                        ลายชัดเจน นูนหนา
                      </li>
                      <li>
                        นิยมแกะลาย
                      </li>
                      <li>
                        เนื้อกึ่งนุ่มกึ่งกรอบ
                      </li>
                      <li>
                        น้ำหนัก 1.4 - 1.6 กิโลกรัม
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="pt-4 px-4 pb-2 max-w-xs bg-gray-300 rounded-lg shadow-md">
                <img
                  class="object-cover block mx-auto h-48 rounded-lg sm:mx-0 sm:flex-shrink-0"
                  src={melon2}
                  alt="Product"
                />
                <div class="text-center space-y-2">
                  <div class="space-y-0.5">
                    <p class="mt-2 text-2xl text-green-800 font-bold">
                      เมล่อนมาชิตะ
                    </p>
                    <ul class="list-inside md:list-disc text-gray-600 font-medium text-left px-10 pt-2">
                      <li>
                        เนื้อส้ม
                      </li>
                      <li> 
                        เนื้อฉ่ำ หวานหอม
                      </li>
                      <li>
                        น้ำหนัก 1.5 - 2.0 กิโลกรัม
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="pt-4 px-4 pb-2 max-w-xs bg-gray-300 rounded-lg shadow-md">
                <img
                  class="object-cover block mx-auto h-48 w-64 rounded-lg sm:mx-0 sm:flex-shrink-0"
                  src={melon3}
                  alt="Product"
                />
                <div class="text-center space-y-2">
                  <div class="space-y-0.5">
                    <p class="mt-2 text-2xl text-green-800 font-bold">
                      เมล่อนโมมิจิ
                    </p>
                    <ul class="list-inside md:list-disc text-gray-600 font-medium text-left px-10 pt-2">
                      <li>
                        เนื้อส้ม
                      </li>
                      <li> 
                        ลายชัดเจน นูนหนา
                      </li>
                      <li>
                        เนื้อฉ่ำ หวานหอม
                      </li>
                      <li>
                        น้ำหนัก 1.6 - 2.0 กิโลกรัม
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
