import React, { Component } from "react";
import Topnav from '../components/Topnav'
import meron2 from "../assets/meron2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {

    return(
        <div>
        <Topnav />
        <section className="App h-screen w-full flex justify-center items-center bg-yellow-200">
        <div class="container">
       <h1 class="font-bold text-4xl mb-8">Homepage</h1>
       <hr/>
        <br/>
        
        <div class="container-sm">
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50">
                <img class="w-full" src={meron2} alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
            </div>
            </div>
            </div>
        </section>
        </div>

);
}
export default Home;