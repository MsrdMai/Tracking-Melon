import React, { useState, useEffect} from "react";
import Topnav from "../components/Topnav";
import validation from "../components/validate";
import Axios from "axios";


const Register = () => {
  const [type_userList, setType_userList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/type_user").then((response) => {
      setType_userList(response.data);
    });
  });

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  };

  return (
    <div>
      <Topnav />

      <section className="App h-screen w-full flex justify-center items-center bg-yellow-200">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            action=""
            className=" bg-white shadow-md rounded px-8 py-8 pt-14"
          >
            <p class="text-3xl">ลงทะเบียน</p>
            <hr />
            <br />
            <div className="px-4 pb-4">
              <label
                htmlFor="email"
                className="text-left mb-1 md:mb-0 pr-4 block font-bold"
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                placeholder="Johnbull@example.com"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && (
                <p className="text-red-700 font-bold">{errors.email}</p>
              )}
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
                onChange={handleChange}
                value={values.username}
              />
              {errors.username && (
                <p className="text-red-700 font-bold">{errors.username}</p>
              )}
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
                name="password"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Enter your password"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && (
                <p className="text-red-700 font-bold">{errors.password}</p>
              )}
            </div>

            <div className="px-4 pb-4">
              <label
                htmlFor="text"
                className="text-left mb-1 md:mb-0 pr-4 block font-bold"
              >
                PHONE
              </label>
              <input
                type="text"
                name="phone"
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Enter your phone"
                onChange={handleChange}
                value={values.phone}
              />
              {errors.phone && (
                <p className="text-red-700 font-bold">{errors.phone}</p>
              )}
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="px-4 pb-4">
                <label
                  class="text-left mb-1 md:mb-0 pr-4 block font-bold "
                  for="inline-password"
                >
                  ประเภทผู้ใช้งาน
                </label>

                
                  {type_userList.map((val, key) => {
                    return (
                      <div class="px-6 pb-6">
                       <label class="inline-flex items-center">
                        <input
                          type="radio"
                          class="form-radio"
                          name="accountType"
                          value="personal"
                          
                        />
                        <span class="ml-6">
                        {val.typeuser_name} 
                        </span>
                      </label>
                      
                       </div>
                    );
                  })}

                
               
              </div>
            </div>

            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3"></div>
              <div class="md:w-2/3">
                <button
                  class="shadow bg-green-500 hover:bg-yellow-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
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
