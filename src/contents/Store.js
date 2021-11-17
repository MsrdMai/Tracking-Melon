import React, { Component } from "react";
import Topnav from "../components/Topnav";
import FarmerTab from "../components/FarmerTab";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImg from "../assets/bg.jpg";
import test from "../assets/test.jpg";

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
            <FarmerTab/>
            <br></br>
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
              <p class="pt-5 text-4xl text-green-600 font-black ">
                เกี่ยวกับฟาร์ม
              </p>
              <br></br>
              <div class="row">
                <div class="col-sm-6 col-md-6">
                  
                  <img
                    src={test}
                    style={{
                      display: "block",
                      borderRadius: "0%",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      Width: "100%",
                      Height: "100%",
                    }}
                  ></img>
                  <br></br>
                </div>

                <div class="col-sm-6 col-md-6">
                  <br></br>
                  <br></br>
                  <br></br>
                  <p
                    class="pt-3 text-xl font-black"
                    style={{
                      alignItems: "center",
                      textAlign: "center",
                      marginLeft: "50px",
                      marginRight: "50px",
                    }}
                  >
                    "
                    เป็นสถานที่ท่องเที่ยวเชิงเกษตรที่เน้นปลูกและปรับปรุงพืชสายพันธุ์พิเศษหายากจากทั่วโลก
                    ใช้เทคนิคการดูแลในระบบโรงเรือนเทคโนโลยีจากต่างงประเทศ
                    สายทัวร์เที่ยวชมโรงเรือนได้ที่นี่ และสามารถชิมเมล่อนสดๆ
                    จากฟาร์มได้อีกด้วย, Coro Garden
                    พื้นที่กิจกรรมลองปลูกต้นไม้และสามารถเก็บผลผลิตได้ด้วยตัวเอง
                    สุดท้าย Coro Me จุดสร้างสรรค์กิจกรรม DIY
                    กับต้นไม้หลากสายพันธุ์ทั้ง บอนไซ ต้นไม้มงคล
                    และยังมีอีกหลากหลายกิจกรรมให้ได้ร่วมสนุกกัน
                    ใครหาที่พักวันหยุดแบบเชิงเกษตรแถมถ่ายรูปสวยก็แวะไปชิลล์กันได้นะ
                    "
                  </p>
                  <br></br>
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
export default Store;
