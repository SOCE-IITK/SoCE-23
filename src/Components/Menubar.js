// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './Styles/header.css'
// import logo from './logo.png'
// const items = [
//     {
//         name: ["Home"],
//         subitems: [["Home","/","0.1"],["About", "#", "1.1"], ["Articles", "#", "1.2"], ["Recent", "#", "1.3"]],

//     },
//     {
//         name: ["Flagship"],
//         subitems: [["Flagship","/events","0.2"],["Freshers", "#", "2.1"], ["Farewell", "#", "2.2"], ["CWP", "#", "2.3"], ["Concalve", "#", "2.4"], ["Magazine", "#", "2.5"]]
//     },
//     {
//         name: ["Student Section"],
//         subitems: [["Student Section","/student","0.3"],["Intern Chats", "#", "3.1"], ["Career Choices", "#", "3.2"], ["Placement Postulates", "/postulates", "3.3"], ["TTP", "#", "3.4"], ["Summer Projects", "#", "3.5"], ["Competition", "#", "3.6"], ["Informal Session", "#", "3.7"], ["Resumes", "#", "3.8"], ["Alumnus", "#", "3.9"], ["Merchs.", "#", "3.10"]]
//     },
//     {
//         name: ["Team"],
//         subitems: [["Current Team","/team","0.4"],['Past Teams',"/pastteams",'1.4']]
//     },
//     {
//         name: ["Magazines"],
//         subitems: [["Strengths","/strength","0.5"]],

//     },
//     {
//         name: ["Portal"],
//         subitems: [["Portal","/portal","0.6"],["Internship", "#", "6.1"], ["CivERE", "#", "6.2"]]
//     },
// ]

// const Menu = items.map((i) => {

//     return (
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">

//                     <NavDropdown renderMenuOnMount={true} title={i.name[0]} id="basic-nav-dropdown">
//                         {Sub_list(i.subitems)}
//                     </NavDropdown>

//             </Nav>
//         </Navbar.Collapse>
//     )
// })
// function Sub_list(i) {
//     const l = i.map((j) => {
//         return (

//                 <NavDropdown.Item key={j[2]} href={j[1]}>{j[0]}</NavDropdown.Item>

//         )
//     })

//     return l
// }

// function Menubar() {

//     return (
//         <Navbar sticky="top" bg="light" expand="lg" id="menubar">
//             <Container>
//                 <Navbar.Brand href="/">
//                     <img id='soce-logo' src={logo} alt='Logo'></img>
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto justify-content-center">
//                         {Menu}
//                         <Nav.Link href="/contact-us">Contact-us</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default Menubar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Styles/header.css";
import logo from "./logo.png";
const items = [
  //     {
  //         name: ["Strengths"],
  //         subitems: [["Strengths","/strength","0.5"]],
  //     },
  //     {
  //         name: ["Events"],
  //         subitems: [["Events","/","0.2"],["Freshers", "#", "2.1"], ["Farewell", "#", "2.2"], ["CWP", "#", "2.3"], ["Concalve", "#", "2.4"], ["Magazine", "#", "2.5"]]
  //     },
  //     {
  //         name: ["Students"],
  //         subitems: [["Students","/student","0.3"],["Intern Chats", "#", "3.1"], ["Career Choices", "#", "3.2"], ["Placement Postulates", "/postulates", "3.3"], ["TTP", "#", "3.4"], ["Summer Projects", "#", "3.5"], ["Competition", "#", "3.6"], ["Informal Session", "#", "3.7"], ["Resumes", "#", "3.8"], ["Alumnus", "#", "3.9"], ["Merchs.", "#", "3.10"]]
  //     },
  //     {
  //         name: ["Portals"],
  //         subitems: [["Portals","/portal","0.6"],["Internship", "#", "6.1"], ["CivERE", "#", "6.2"]]
  //     },
  //     {
  //         name: ["Team"],
  //         subitems: [["Current Team","/team","0.4"],['Past Teams',"/pastteams",'1.4']]
  //     },
];

const Menu = items.map((i) => {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <NavDropdown
          renderMenuOnMount={true}
          title={i.name[0]}
          id="basic-nav-dropdown"
        >
          {Sub_list(i.subitems)}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  );
});
function Sub_list(i) {
  const l = i.map((j) => {
    return (
      <NavDropdown.Item key={j[2]} href={j[1]}>
        {j[0]}
      </NavDropdown.Item>
    );
  });

  return l;
}

function Menubar() {
  return (
    <Navbar sticky="top" bg="light" expand="lg" id="menubar">
      <Container>
        <Navbar.Brand href="/">
          <img id="soce-logo" src={logo} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-center">
            {Menu}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/students">Students</Nav.Link>
            <Nav.Link href="/strengths">
              Strengths
              <sup className="new-icon" style={{ color: "red" }}>
                New
              </sup>
            </Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/reports">Reports</Nav.Link>
            {/* <Nav.Link href="/portals">Portals</Nav.Link> */}
            <Nav.Link href="https://sankalaniitk.in/">
              Conclave
              <sup className="new-icon" style={{ color: "#0092ca" }}>
                Live Now
              </sup>
            </Nav.Link>
            <Nav.Link href="/archive">
              Archive
              <sup className="new-icon" style={{ color: "red" }}>
                New
              </sup>
            </Nav.Link>
            <Nav.Link href="/gallery">
              Gallery
              <sup className="new-icon" style={{ color: "red" }}>
                New
              </sup>
            </Nav.Link>
            <Nav.Link href="/team/team24">Team</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
