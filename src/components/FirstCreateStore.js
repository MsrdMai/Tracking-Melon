import React, { Component } from "react";
import Topnav from "../components/Topnav";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImg from "../assets/bg.jpg";
import store from "../assets/store.png";

class FirstCreateStore extends Component {

  render() {
    var x = document.getElementById("map");
    function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
      
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
    }

    function showPosition(position) {
            document.getElementById("latitude").disabled=false;
            document.getElementById("longitude").disabled=false;
            document.getElementById("latitude").value = position.coords.latitude;
            document.getElementById("longitude").value = position.coords.longitude;
      
            }


        var loadFile = function(event) {
            var image = document.getElementById('output');

            document.getElementById('output').style.border = '2px solid #34D399';

            image.src = URL.createObjectURL(event.target.files[0]);

            }
            var loadFile2 = function(event) {
            var image = document.getElementById('output2');
            document.getElementById('output2').style.border = '2px solid #34D399';

            image.src = URL.createObjectURL(event.target.files[0]);

            }

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
       
          <br></br>
          <div
            class="container"
            style={{
              background: "white",
              padding: "30px"
            }}
          >
            <div id="Storeform" class="col">
              <p class="pt-5 text-4xl text-green-500 font-black text-left">
                สร้างข้อมูลฟาร์ม
              </p>
              <hr></hr>
              <form
                class="form-info"
                method="POST"
                enctype="multipart/form-data"
                action=""
              >
                <div class="mb-3">
                  <label class="form-label float-start">โลโก้ฟาร์ม</label>
                  <center>
                    <input
                      type="file"
                      class="form-control-file"
                      name="store_logo"
                      id="file"
                      accept="image/png, image/jpeg"
                      onchange={loadFile}
                    />{" "}
                    <br></br>
                    <img id="output" width="300px" height="250px" />
                  </center>
                </div>

                <div class="row">
                  <div class="col">
                    <br></br>
                    <div class="mb-3">
                      <button
                        class="btn btn-outline-dark float-start"
                        onclick={getLocation}
                      >
                        ตำแหน่งฟาร์มของคุณ
                      </button>
                      <br></br> <br></br>
                      <small
                        id="emailHelp"
                        class="form-text text-muted float-start"
                      >
                        กรุณาคลิกที่ปุ่มเพื่อระบุตำแหน่งฟาร์ม
                      </small>
                      <br></br>

                      <div id="map">
                        <label class="form-label float-start">
                          ละติจูด (Latitude) :
                        </label>
                        <input
                          type="number"
                          step="any"
                          disabled="disabled"
                          class="form-control"
                          id="latitude"
                          name="latitude"
                          value=""
                        />
                        <label class="form-label float-start">
                          ลองจิจูด (Longitude) :
                        </label>
                        <input
                          type="number"
                          step="any"
                          disabled="disabled"
                          class="form-control"
                          id="longitude"
                          name="longitude"
                          value=""
                        />
                        <br></br>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label float-start">ชื่อร้านค้า</label>
                      <input
                        type="text"
                        class="form-control"
                        name="store_name"
                        placeholder="ชื่อร้านค้า"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label float-start">
                        รายละเอียดร้านค้า
                      </label>
                      <textarea
                        class="form-control"
                        name="store_description"
                        rows="3"
                        required
                      ></textarea>
                    </div>

                    <div class="mb-3">
                      <label class="form-label float-start">
                        ที่อยู่ร้านค้า
                      </label>
                      <textarea
                        type="textarea"
                        class="form-control"
                        name="store_address"
                        rows="3"
                        required
                      ></textarea>
                    </div>

                    <div class="mb-3">
                      <label class="form-label float-start">
                        เบอร์โทรศัพท์
                      </label>
                      <input
                        type="tel"
                        class="form-control"
                        name="store_phone"
                        placeholder="หมายเลขโทรศัพท์ต้องมี 10 หลัก"
                        required
                      />
                    </div>
                  </div>

                  <div class="col">
                    <br></br>
                    <div class="mb-3">
                      <br></br>
                      <label class="form-label float-start">
                        บรรยากาศฟาร์ม
                      </label>
                      <input
                        type="file"
                        class="form-control-file"
                        name="store_img"
                        id="file2"
                        accept="image/png, image/jpeg"
                        onchange={loadFile2}
                      />{" "}
                      <br></br> <br></br> <br></br>
                      <img id="output2" width="600px" height="400px" />
                    </div>
                  </div>
                </div>
                <div class="col">
                  <br></br>
                  <p class="pt-5 text-2xl text-green-400 font-black text-left">
                    ข้อมูลสำหรับการชำระเงินของลูกค้า
                  </p>
                  <hr></hr>

                  <div class="mb-3 col-sm-6 my-1">
                    <label class="form-label float-start">ชื่อบัญชี</label>
                    <input
                      type="text"
                      class="form-control"
                      name="bank_account"
                      placeholder="ชื่อเจ้าของบัญชี"
                      required
                    />
                  </div>
                  <div class="mb-3 col-sm-6 my-1">
                    <label class="form-label float-start">ชื่อธนาคาร</label>
                    <select class="form-control" name="name_bank">
                      <option value="0">เลือกธนาคาร</option>
                      <option value="พร้อมเพย์">พร้อมเพย์</option>
                      <option value="ธ.ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร">
                        ธ.ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร
                      </option>
                      <option value="ธ.ธนาคารออมสิน">ธ.ธนาคารออมสิน</option>
                      <option value="ธ.กรุงศรีอยุธยา จำกัด (มหาชน)">
                        ธ.กรุงศรีอยุธยา จำกัด (มหาชน)
                      </option>
                      <option value="ธ.กรุงเทพ จำกัด (มหาชน)">
                        ธ.กรุงเทพ จำกัด (มหาชน)
                      </option>
                      <option value="ธ.กรุงไทย จำกัด (มหาชน)">
                        ธ.กรุงไทย จำกัด (มหาชน)
                      </option>
                      <option value="ธ.กสิกรไทย จำกัด (มหาชน)">
                        ธ.กสิกรไทย จำกัด (มหาชน)
                      </option>
                      <option value="ธ.เกียรตินาคิน จำกัด (มหาชน)">
                        ธ.เกียรตินาคิน จำกัด (มหาชน)
                      </option>
                      <option value="ธ.ซีไอเอ็มบี ไทย จำกัด (มหาชน)">
                        ธ.ซีไอเอ็มบี ไทย จำกัด (มหาชน)
                      </option>
                      <option value="ธ.ทหารไทยธนชาต จำกัด (มหาชน)">
                        ธ.ทหารไทยธนชาต จำกัด (มหาชน)
                      </option>
                      <option value="ธ.ทิสโก้ จำกัด (มหาชน)">
                        ธ.ทิสโก้ จำกัด (มหาชน)
                      </option>
                      <option value="ธ.ไทยพาณิชย์ จำกัด (มหาชน)">
                        ธ.ไทยพาณิชย์ จำกัด (มหาชน)
                      </option>
                      <option value="ธ.ยูโอบี จำกัด (มหาชน)">
                        ธ.ยูโอบี จำกัด (มหาชน)
                      </option>
                      <option value="ธ.ไอซีบีซี (ไทย) จำกัด (มหาชน)">
                        ธ.ไอซีบีซี (ไทย) จำกัด (มหาชน)
                      </option>
                    </select>
                  </div>
                  <div class="mb-3 col-sm-6 my-1">
                    <label class="form-label float-start">เลขบัญชี</label>
                    <input
                      type="text"
                      class="form-control"
                      name="bank_id"
                      placeholder="หมายเลขบัญชีต้องเป็น 10 หรือ 13 หลัก"
                      required
                    />
                  </div>
                </div>
              </form>
              <br></br> <br></br>
            </div>

            <button type="submit" class="btn btn-lg btn-block float-end bg-green-300 hover:bg-yellow-300" id='btn-create-store'
                              style={{  
                                "Color": "white",
                                "borderWidth": "5px",
                                "borderRadius": "100%"}}>
                                    <img src={store} width="70px" height="70px"
                                    class="d-inline-block align-top"></img><br></br> 
                                    เปิดร้านเลย</button> <br></br> <br></br>
          </div>
          <br></br>
          <br></br>
          <br></br>
    
       
        </div>
      </div>
    );
  }
}
export default FirstCreateStore;
