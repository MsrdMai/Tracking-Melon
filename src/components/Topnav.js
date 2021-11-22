import React, { Component, useState, useEffect } from "react";
import logo from "../assets/melon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigations() {

  const [user, setUser] = useState({});
    useEffect(() => {
        setInterval(() => {
            const userString = localStorage.getItem("token");
            const user = JSON.parse(userString);
            setUser(user);
            }, [])
        }, 5000);

  if (!user) {

    return (
      <Navbar 
        defaultActiveKey="/Product"
        collapseOnSelect
        toggleable="lg"
        expand="sm"
        bg="light"
        variant="light"
      >
        <Nav.Link href=""></Nav.Link>
        <Navbar.Brand href="/">
  
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          
          <t></t>Tracking Melon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav justified className="ml-auto">
            <Nav.Link href="/">หน้าหลัก</Nav.Link>
            <Nav.Link href=""></Nav.Link> 
         <a
                  class="btn btn-light my-2 my-sm-0 btn-lg btn-block  bg-green-400 text-white"
                
                  href="/Login"
                >
                  Login
                </a>
            <Nav.Link href=""></Nav.Link>
    
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );


  }
  if (user) {
  return (
    <Navbar
      defaultActiveKey="/Product"
      collapseOnSelect
      toggleable="lg"
      expand="sm"
      bg="light"
      variant="light"
    >
      <Nav.Link href=""></Nav.Link>
      <Navbar.Brand href="/">

        <img
          alt=""
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />
        
        <t></t>Tracking Melon
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " style={{  marginLeft:"20px",marginRight:"20px"}}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav justified className="ml-auto ">
          <Nav.Link style={{  marginLeft:"20px",marginRight:"20px"}} href="/">รายการขาย</Nav.Link>
          <Nav.Link href=""></Nav.Link>

          <Nav.Link style={{  marginLeft:"20px",marginRight:"20px"}} href="/">รายการจอง</Nav.Link>
          <Nav.Link href=""></Nav.Link>

          <Nav.Link style={{  marginLeft:"20px",marginRight:"20px"}} href="/">ฟาร์ม</Nav.Link>
          <Nav.Link href=""></Nav.Link>


          <div class="d-grid gap-2">
              <li class="nav-item dropdown" style={{ marginLeft:"40px", marginRight:"40px"}}>
                <a class="nav-link dropdown-toggle btn-light my-2 my-sm-0 btn-lg btn-block" href="" 
                style={{color:"white", backgroundColor:"orange", textAlign: "center",}} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  username
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="">Test.user1@test.com</a></li>
                  <li><a class="dropdown-item" href="">Edit Profile</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li>
                    
                  <a
                class="btn  bg-red-400 text-white dropdown-item"
                style={{alignItems: "center", marginRight:"50px"}}
                href="/"
                onClick={() => { localStorage.removeItem("token"); }} 
              >
                Logout
              </a>
                   </li>
                </ul>
</li>
</div>
              
              

          <Nav.Link href=""></Nav.Link>
  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
}

export default Navigations;
