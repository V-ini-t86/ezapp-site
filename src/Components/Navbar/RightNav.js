import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link className="nav-list" to="/">
        <li>Home</li>
      </Link>
      <Link className="nav-list" to="/client">
        <li>Client</li>
      </Link>
      <a className="nav-list" href="http://ezappsolution.us/about">
        <li>About Us</li>
      </a>
    </Ul>
  );
};

export default RightNav;
