import React, { Component, useState, useEffect } from "react";
import logo from "../assets/melon.png";
import user from "../assets/user.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigations() {
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
          <Nav.Link href="/">รายการขาย</Nav.Link>
          <Nav.Link href=""></Nav.Link>

          <Nav.Link href="">รายการจอง</Nav.Link>
          <Nav.Link href=""></Nav.Link>

          <Nav.Link href="">ฟาร์ม</Nav.Link>
          <Nav.Link href=""></Nav.Link>

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

export default Navigations;
