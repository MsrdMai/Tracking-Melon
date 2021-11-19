import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FarmerTab from "../components/FarmerTab";
import Topnav from "../components/Topnav";
import bgImg from "../assets/bg.jpg";
import check from "../assets/check.png";
import load from "../assets/load.png";
import box from "../assets/box.png";
import cancel from "../assets/cancel.png";
import harvest from "../assets/harvest.png";

class OrderFarm extends Component {
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
          <FarmerTab />
          <br></br>
          <div
            class="container"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              // alignItems: "center",
              textAlign: "center",
            }}
          >
            <p class="pt-5 text-4xl text-green-600 font-black items-center	">
              OrderFarm (รูปสินค้า)
            </p>
          
            <br></br>

 <form>
 <div class="form-group">
   <div class="row">
   <div class="col-lg-1">
            </div>
              <div class="col-lg-4 col-12">
                
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="ค้นหา Username"
                />
              </div>
              <div class="col-lg-4 col-12">
                <select class="form-select" aria-label="Default select example">
                  <option selected>เลือกสถานะสินค้า</option>
                  <option value="1">รอชำระเงิน</option>
                  <option value="2">รอยืนยันคำสั่งซื้อ</option>
                  <option value="3">เตรียมส่งสินค้า</option>
                </select>
                </div>
                <div class="col-lg-2 col-12">
                <button type="submit" class="btn btn-primary col-12">ค้นหา</button>

                </div>
                <div class="col-lg-1">
            </div>
                </div>
              </div>
            </form>
            <br></br>
           
            <br></br>
            <div class="row">
            <div class="col-1">
            </div>
              <div class="col-lg-10 ">
                <table class="table table-bordered border-dark">
                  <thead></thead>
                  <tbody>
                    <tr class="bg-blue-200">
                      <th>
                        <br></br>No.#<br></br>
                      </th>
                      <th>
                        <br></br>รายการสั่งซื้อ<br></br>
                      </th>
                    </tr>
                    <tr class="bg-gray-50">
                      <td>1</td>
                      <td>
                        <div class="row">
                          <div class="col-sm-6 col-md-6 text-left">
                            <p class="text-2xl font-black  text-green-600 	">
                              Username : TestTerOne{" "}
                            </p>
                            <p class="text-1xl text-gray-800 ">
                              จำนวน : 1 <br></br>
                              ราคาทั้งหมด : 250 <br></br>
                              เบอร์โทร : 0123456789 <br></br>
                              อีเมล : tester@test.com <br></br>
                              ที่อยู่จัดส่ง : 1 ลาดกระบัง <br></br>
                            </p>
                            <br></br>
                          </div>
                          <div class="col-sm-2 col-md-6">
                            <p class="text-2xl font-black bg-green-200 rounded-full py-3 px-6">
                              เตรียมส่งสินค้า
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-3 col-md-6">
                            <br></br>
                            <a
                              class="text-1xl text-red-800 underline"
                              href=""
                              style={{
                                display: "inline-block",
                              }}
                            >
                              หลักฐานการโอนเงิน
                            </a>
                            <img
                              src={check}
                              width="30"
                              height="30"
                              style={{
                                display: "inline-block",
                                padding: "5px",
                                margin: "5px",
                              }}
                            ></img>
                          </div>

                          <div class="col">
                            <a
                              class="col-12  btn btn-light btn-lg btn-block  bg-yellow-500 text-gray-100 hover:border-2 hover:border-yellow-500 hover:text-yellow-500"
                              href=""
                            >
                              <img
                                src={box}
                                width="30"
                                height="30"
                                style={{
                                  display: "inline-block",
                                }}
                              />
                              แจ้งเลขพัสดุ
                            </a>
                            <a
                              class="col-12   btn btn-light btn-lg btn-block bg-gray-300 text-red-900 hover:border-2 hover:border-red-500 hover:text-red-500"
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
                              ยกเลิกคำสั่งซื้อ
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* No.2 */}

                    <tr class="bg-gray-50">
                      <td>2</td>
                      <td>
                        <div class="row">
                          <div class="col-sm-6 col-md-6 text-left">
                            <p class="text-2xl font-black  text-green-600 	">
                              Username : TestTerTwo{" "}
                            </p>
                            <p class="text-1xl text-gray-800 ">
                              จำนวน : 2 <br></br>
                              ราคาทั้งหมด : 250 <br></br>
                              เบอร์โทร : 0123456789 <br></br>
                              อีเมล : tester2@test.com <br></br>
                              ที่อยู่จัดส่ง : 2 ลาดกระบัง <br></br>
                            </p>
                            <br></br>
                          </div>
                          <div class="col-sm-2 col-md-6">
                            <p class="text-2xl font-black bg-green-200 rounded-full py-3 px-6">
                              รอยืนยันคำสั่งซื้อ
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-3 col-md-6">
                            <br></br>
                            <a
                              class="text-1xl text-red-800 underline"
                              href=""
                              style={{
                                display: "inline-block",
                              }}
                            >
                              หลักฐานการโอนเงิน
                            </a>
                            <img
                              src={load}
                              width="30"
                              height="30"
                              style={{
                                display: "inline-block",
                                padding: "5px",
                                margin: "5px",
                              }}
                            ></img>
                          </div>

                          <div class="col">
                            <a
                              class="col-12  btn btn-light btn-lg btn-block  bg-yellow-500 text-gray-100 hover:border-2 hover:border-yellow-500 hover:text-yellow-500"
                              href=""
                            >
                              <img
                                src={harvest}
                                width="30"
                                height="30"
                                style={{
                                  display: "inline-block",
                                }}
                              />
                              เตรียมส่งสินค้า
                            </a>
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
                              ยกเลิกคำสั่งซื้อ
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* No.3 */}

                    <tr class="bg-gray-50">
                      <td>3</td>
                      <td>
                        <div class="row">
                          <div class="col-sm-6 col-md-6 text-left">
                            <p class="text-2xl font-black  text-green-600 	">
                              Username : TestTerThree{" "}
                            </p>
                            <p class="text-1xl text-gray-800 ">
                              จำนวน : 3 <br></br>
                              ราคาทั้งหมด : 450 <br></br>
                              เบอร์โทร : 0123456789 <br></br>
                              อีเมล : tester3@test.com <br></br>
                              ที่อยู่จัดส่ง : 3 ลาดกระบัง <br></br>
                            </p>
                            <br></br>
                          </div>
                          <div class="col-sm-2 col-md-6">
                            <p class="text-2xl font-black bg-green-200 rounded-full py-3 px-6">
                              รอชำระเงิน
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-3 col-md-6">
                            <br></br>
                            <p
                              class="text-1xl text-gray-600"
                              href=""
                              style={{
                                display: "inline-block",
                              }}
                            >
                              หลักฐานการโอนเงิน
                            </p>
                            <img
                              src={load}
                              width="30"
                              height="30"
                              style={{
                                display: "inline-block",
                                padding: "5px",
                                margin: "5px",
                              }}
                            ></img>
                          </div>

                          <div class="col">
                            <a
                              class="col-12   btn btn-light btn-lg btn-block bg-gray-300 text-red-900 hover:border-2 hover:border-red-500 hover:text-red-500"
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
                              ยกเลิกคำสั่งซื้อ
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br></br>
            </div>
          </div>

          <br></br>
        </div>
      </div>
    );
  }
}
export default OrderFarm;
