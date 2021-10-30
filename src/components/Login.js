import React, { useState } from "react";
import Topnav from "../components/Topnav";
import Axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";

const Login = () => {
  const [loginStatus, setLoginStatus] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const IntoLogin = (event) => {
    Axios.post(
      "http://localhost:3001/IntoLogin",
      {
        username: data.username,
        password: data.password,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0]);
        }
      })
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Topnav />
      <section className="App h-screen w-full flex justify-center items-center bg-yellow-200">
        <div className="w-full max-w-md bg-gray-300">
          <p>{loginStatus}</p>
          <form
            action=""
            className=" bg-white shadow-md rounded px-8 py-8 pt-14"
          >
            <div className="px-4 pb-4">
              <label className="text-sm block font-bold  pb-2">Username</label>
              <input
                type="text"
                name="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                placeholder="Enter your Username"
                onChange={handleChange}
                value={data.username}
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
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Enter your password"
                onChange={handleChange}
                value={data.password}
                required
              />
              
            </div>
            <br />
            <div class="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-yellow-300 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={IntoLogin}
              >
                เข้าสู่ระบบ
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-green-500 hover:text-yellow-300"
                href="/Register"
              >
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
