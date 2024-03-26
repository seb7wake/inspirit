import React from "react";
import { Container, Navbar, Dropdown, Nav, NavDropdown } from "react-bootstrap";
import { bookSharp } from "ionicons/icons";
import { useNavigate } from "react-router-dom";
import { SignOutUser } from "../../api/auth";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const signedOut = await SignOutUser();
    if (signedOut) navigate("/signin");
  };

  return (
    <Navbar className="bg-white">
      <Container>
        <Navbar.Brand
          className="d-flex align-items-center"
          onClick={() => navigate("/")}
        >
          <img
            alt="inspirit-logo"
            src={bookSharp}
            width="40"
            height="40"
            className="d-inline-block align-top mx-2"
          />
          <div className="d-flex flex-column mx-2 h2 font-weight-bold">
            Inspirit
          </div>
        </Navbar.Brand>
      </Container>
      <Navbar.Collapse className="mx-5">
        <Nav className="mr-3">
          <NavDropdown title="Profile">
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
