import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { isAuthenticated } from "./backend/Auth";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let login = isAuthenticated();
    setIsLoggedIn(login);
  }, [isAuthenticated]);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="/" className="navbar__brand">
          Tech Nova
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/product">Product</Nav.Link>

            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            {!isLoggedIn && (
              <>
                <Nav.Link href="/signup">Sign Up</Nav.Link>

                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}

            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/user">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/cart">Go To Cart</NavDropdown.Item>
              <NavDropdown.Item href="/orders">Order History</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
      </Nav.Link>
                        </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
