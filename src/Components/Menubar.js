import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Styles/header.css";
import logo from "./logo.png";
import { useEffect, useState } from "react";

const items = [];

const Menu = items.map((i) => (
  <Navbar.Collapse id="basic-navbar-nav" key={i.name[0]}>
    <Nav className="ms-auto">
      <NavDropdown
        renderMenuOnMount
        title={i.name[0]}
        id="basic-nav-dropdown"
      >
        {Sub_list(i.subitems)}
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
));

function Sub_list(i) {
  return i.map((j) => (
    <NavDropdown.Item key={j[2]} href={j[1]}>
      {j[0]}
    </NavDropdown.Item>
  ));
}

function Menubar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      id="menubar"
      className={scrolled ? "scrolled" : ""}
    >
      <Container fluid className="px-5">

        <Navbar.Brand href="/" className="brand-wrapper">
          <img id="soce-logo" src={logo} alt="SOCE Logo" />

          <div className="brand-text">
            <div className="brand-title">
              Society of
              <br />
              Civil Engineers
            </div>

            <div className="brand-subtitle">
              INDIAN INSTITUTE OF TECHNOLOGY, KANPUR
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto align-items-center">

            {Menu}

            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/students">
              Students
              <span
                style={{
                  color: "#ff3434",
                  fontSize: 12,
                  marginLeft: 3,
                  fontWeight: 700,
                }}
              >
                New
              </span>
            </Nav.Link>

            <Nav.Link href="/strengths">Strengths</Nav.Link>

            <Nav.Link href="/events">Events</Nav.Link>

            <Nav.Link href="/reports">Reports</Nav.Link>

            <Nav.Link href="https://sankalaniitk.in/">
              Conclave
            </Nav.Link>

            <Nav.Link href="/archive">Archive</Nav.Link>

            <Nav.Link href="/gallery">Gallery</Nav.Link>

            <Nav.Link href="/team/team26">Team</Nav.Link>

            <Nav.Link href="/contact">Contact</Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Menubar;