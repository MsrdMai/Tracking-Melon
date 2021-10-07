import React, { useState } from "react";
import Topnav from "../components/Topnav";

const Register = () => {
  return (
    <div>
      <Topnav />

      <section className="App h-screen w-full flex justify-center items-center bg-yellow-200">
        <div className="w-full max-w-md">
          
         
          <form
            action=""
            className=" bg-white shadow-md rounded px-8 py-8 pt-14"
          >
             <p class="text-3xl">ลงทะเบียน</p>
             <hr/><br/>
            <div className="px-4 pb-4">
              <label htmlFor="email" className="text-left mb-1 md:mb-0 pr-4 block font-bold">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                placeholder="Johnbull@example.com"
              />
            </div>

            <div className="px-4 pb-4">
              <label
                htmlFor="text"
                className="text-left mb-1 md:mb-0 pr-4 block font-bold"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Enter your Username"
              />
            </div>


            <div className="px-4 pb-4">
              <label
                htmlFor="password"
                className="text-left mb-1 md:mb-0 pr-4 block font-bold"
              >
                PASSWORD
              </label>
              <input
                type="password"
                name="email"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Enter your password"
              />
            </div>

         <div class="md:flex md:items-center mb-6">
            <div class="px-4 pb-4">
              <label
                class="text-left mb-1 md:mb-0 pr-4 block font-bold "
                for="inline-password"
              >
                ประเภทผู้ใช้งาน
              </label>
              <div class="px-4 pb-4">
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="accountType"
                    value="personal"
                    checked
                  />
                  <span class="ml-6">เจ้าของฟาร์ม</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="accountType"
                    value="busines"
                  />
                  <span class="ml-6">ผู้ซื้อ</span>
                </label>
              </div>
            </div>
          </div>

          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3"></div>
            <div class="md:w-2/3">
              <button
                class="shadow bg-green-500 hover:bg-yellow-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </form>
        </div>
      </section>
    </div>
  );
};
export default Register;
