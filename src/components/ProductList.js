import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import meron2 from "../assets/meron2.jpg";
import { GoSearch } from "react-icons/go";
import {
  FormControl,
  Form,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  Button,
} from "react-bootstrap";

class ProductList extends Component {
  render() {
    return (
      <div>
        {/* ทำในนี้ */}
        <div class="App w-full bg-green-100">
          <br />
          <br />
          <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 bg-gray-300 rounded-lg">
            <div className="input-container flex justify-between px-12 flex-wrap">
              <h1 class="font-bold text-3xl font-heading text-green-800 md:h-full md:w-48">
                สินค้าทั้งหมด
              </h1>
              <Form className="d-flex  max-w-sm ">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
            <br />
            <div class="container-sm">
              <div class="row grid grid-cols-3 gap-4 flex justify-center">
              <div class="pt-4 px-4 pb-2 max-w-xs bg-white rounded-lg shadow-md">
                  <img
                    class="block object-scale-down mx-auto h-48 rounded-lg sm:mx-0 sm:flex-shrink-0"
                    src={meron2}
                    alt="Product"
                  />
                  <div class="text-center space-y-2">
                    <div class="space-y-0.5">
                      <p class="mt-2 text-lg text-black font-semibold">
                        มาชิตะบรรจุกล่อง
                      </p>

                      <div class="flex justify-between mt-2 mx-4">
                        <p class="text-red-500 font-medium">250 บาท</p>
                        <p class="text-gray-500 font-medium">10 ชิ้น</p>
                      </div>
                    </div>
                    <button
                      class="px-24 py-2 mt-2 text-sm text-black font-semibold rounded-lg
                     bg-red-300 hover:bg-red-600"
                    >
                      สั่งซื้อ
                    </button>
                  </div>
                </div>

                <div class="pt-4 px-4 pb-2 max-w-xs bg-white rounded-lg shadow-md">
                  <img
                    class="block object-scale-down mx-auto h-48 rounded-lg sm:mx-0 sm:flex-shrink-0"
                    src={meron2}
                    alt="Product"
                  />
                  <div class="text-center space-y-2">
                    <div class="space-y-0.5">
                      <p class="mt-2 text-lg text-black font-semibold">
                        มาชิตะบรรจุกล่อง
                      </p>

                      <div class="flex justify-between mt-2 mx-4">
                        <p class="text-red-500 font-medium">250 บาท</p>
                        <p class="text-gray-500 font-medium">10 ชิ้น</p>
                      </div>
                    </div>
                    <button
                      class="px-24 py-2 mt-2 text-sm text-black font-semibold rounded-lg
                     bg-red-300 hover:bg-red-600"
                    >
                      สั่งซื้อ
                    </button>
                  </div>
                </div>

                <div class="pt-4 px-4 pb-2 max-w-xs bg-white rounded-lg shadow-md">
                  <img
                    class="block object-scale-down mx-auto h-48 rounded-lg sm:mx-0 sm:flex-shrink-0"
                    src={meron2}
                    alt="Product"
                  />
                  <div class="text-center space-y-2">
                    <div class="space-y-0.5">
                      <p class="mt-2 text-lg text-black font-semibold">
                        มาชิตะบรรจุกล่อง
                      </p>

                      <div class="flex justify-between mt-2 mx-4">
                        <p class="text-red-500 font-medium">250 บาท</p>
                        <p class="text-gray-500 font-medium">10 ชิ้น</p>
                      </div>
                    </div>
                    <button
                      class="px-24 py-2 mt-2 text-sm text-black font-semibold rounded-lg
                     bg-red-300 hover:bg-red-600"
                    >
                      สั่งซื้อ
                    </button>
                  </div>
                </div>

                <div class="pt-4 px-4 pb-2 max-w-xs bg-white rounded-lg shadow-md">
                  <img
                    class="block object-scale-down mx-auto h-48 rounded-lg sm:mx-0 sm:flex-shrink-0"
                    src={meron2}
                    alt="Product"
                  />
                  <div class="text-center space-y-2">
                    <div class="space-y-0.5">
                      <p class="mt-2 text-lg text-black font-semibold">
                        มาชิตะบรรจุกล่อง
                      </p>

                      <div class="flex justify-between mt-2 mx-4">
                        <p class="text-red-500 font-medium">250 บาท</p>
                        <p class="text-gray-500 font-medium">10 ชิ้น</p>
                      </div>
                    </div>
                    <button
                      class="px-24 py-2 mt-2 text-sm text-black font-semibold rounded-lg
                     bg-red-300 hover:bg-red-600"
                    >
                      สั่งซื้อ
                    </button>
                  </div>
                </div>

                <div class="pt-4 px-4 pb-2 max-w-xs bg-white rounded-lg shadow-md">
                  <img
                    class="block object-scale-down mx-auto h-48 rounded-lg sm:mx-0 sm:flex-shrink-0"
                    src={meron2}
                    alt="Product"
                  />
                  <div class="text-center space-y-2">
                    <div class="space-y-0.5">
                      <p class="mt-2 text-lg text-black font-semibold">
                        มาชิตะบรรจุกล่อง
                      </p>

                      <div class="flex justify-between mt-2 mx-4">
                        <p class="text-red-500 font-medium">250 บาท</p>
                        <p class="text-gray-500 font-medium">10 ชิ้น</p>
                      </div>
                    </div>
                    <button
                      class="px-24 py-2 mt-2 text-sm text-black font-semibold rounded-lg
                     bg-red-300 hover:bg-red-600"
                    >
                      สั่งซื้อ
                    </button>
                  </div>
                </div>

                <div class="pt-4 px-4 pb-2 max-w-xs bg-white rounded-lg shadow-md">
                  <img
                    class="block object-scale-down mx-auto h-48 rounded-lg sm:mx-0 sm:flex-shrink-0"
                    src={meron2}
                    alt="Product"
                  />
                  <div class="text-center space-y-2">
                    <div class="space-y-0.5">
                      <p class="mt-2 text-lg text-black font-semibold">
                        มาชิตะบรรจุกล่อง
                      </p>

                      <div class="flex justify-between mt-2 mx-4">
                        <p class="text-red-500 font-medium">250 บาท</p>
                        <p class="text-gray-500 font-medium">10 ชิ้น</p>
                      </div>
                    </div>
                    <button
                      class="px-24 py-2 mt-2 text-sm text-black font-semibold rounded-lg
                     bg-red-300 hover:bg-red-600"
                    >
                      สั่งซื้อ
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
        </div>
        {/* จบตรงนี้ */}
      </div>
    );
  }
}
export default ProductList;
