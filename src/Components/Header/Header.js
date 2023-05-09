import React, { useState } from "react";
import { Navbar, Container, Dropdown, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GlobalInfo } from "../../App";
import { useContext } from "react";
import "./Header.css";

const Header = () => {
  // const [isLogin, setIsLogin] = useState(false)
  const email = localStorage.getItem("emailData");
  const { cartItems } = useContext(GlobalInfo);

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  console.log("header.js cartitems count", cartItems);
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        {/* <div>
          {email ? (
            <Navbar.Brand>
              <Link to="/" onClick={handleClick}>
                Logout
              </Link>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand>
              <Link to="/login">Login</Link>
            </Navbar.Brand>
          )}
        </div> */}
        {/* <Navbar.Brand>
          <Link to="/login/dashboard">Dashboard</Link>
        </Navbar.Brand> */}
        <Navbar.Brand>
          <Link to="/cart">
            <Nav>
              <Dropdown>
                <div className="cart-length">
                  <FaShoppingCart color="white" fontSize="25px" />
                  <span style={{ color: "white", marginLeft: "5px" }}>
                    {cartItems.length === 0 ? "" : cartItems.length}
                  </span>
                </div>
              </Dropdown>
            </Nav>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
