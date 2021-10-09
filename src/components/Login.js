import React, { useState } from "react";
import Topnav from "../components/Topnav";

const Login = () => {

 

  return (
    <div>
      <Topnav />
      <section className="App h-screen w-full flex justify-center items-center bg-yellow-200">
        <div className="w-full max-w-md bg-gray-300">
          <form
            action=""
            className=" bg-white shadow-md rounded px-8 py-8 pt-14"
          >
            <div className="px-4 pb-4">
              <label htmlFor="email" className="text-sm block font-bold  pb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                placeholder="Johnbull@example.com"
                required
              />
            </div>
            <div className="px-4 pb-4">
              <label
                htmlFor="password"
                className="text-sm block font-bold pb-2"
              >
                PASSWORD
              </label>
              <input
                type="password"
                name="email"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Enter your password"
                required
              />
            </div>
            <br/>
            <div class="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-yellow-300 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                เข้าสู่ระบบ
              </button>
              <a class="inline-block align-baseline font-bold text-sm text-green-500 hover:text-yellow-300" href="/Register">
              ลงทะเบียน
      </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Login;
