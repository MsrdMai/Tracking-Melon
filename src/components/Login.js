import React, { useEffect, useState } from "react";
import Topnav from "../components/Topnav";
import Axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import axios from "axios";

async function loginUser(credentials) {
  return fetch('http://localhost:3001/api/users/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ("token" in response){
      localStorage.setItem("token", response.token);
    }
    setToken(response);

  }
  useEffect(() => {
    setInterval(() => {
        const userString = localStorage.getItem("token");
        const user = JSON.parse(userString);
        setUser(user);
        }, [])
    }, 5000);

  if (!user) {
  return (
    <div>
      <Topnav />
      <section className="App h-screen w-full flex justify-center items-center bg-yellow-200">
        <div className="w-full max-w-md bg-gray-300">
          <form
            action=""
            className=" bg-white shadow-md rounded px-8 py-8 pt-14"
            onSubmit={handleSubmit}
          >
            <div className="px-4 pb-4">
              <label className="text-sm block font-bold  pb-2">Username</label>
              <input
                type="text"
                name="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                placeholder="Enter your Username"
                onChange={e => setUserName(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
                required
              />
              
            </div>
            <br />
            <div class="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-yellow-300 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                type="submit"
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
  if (user) {
    return <Redirect to="/"/>
};
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
