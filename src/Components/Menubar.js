
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Styles/header.css'
const items = [
    {
        name: ["Home"],
        subitems: [["Home","/","0.1"],["About", "#", "1.1"], ["Articles", "#", "1.2"], ["Recent", "#", "1.3"]],

    },
    {
        name: ["Flagship"],
        subitems: [["Flagship","/events","0.2"],["Freshers", "#", "2.1"], ["Farewell", "#", "2.2"], ["CWP", "#", "2.3"], ["Concalve", "#", "2.4"], ["Magazine", "#", "2.5"]]
    },
    {
        name: ["Student Section"],
        subitems: [["Student Section","/","0.3"],["Intern Chats", "#", "3.1"], ["Career Choices", "#", "3.2"], ["Placement Postulates", "#", "3.3"], ["TTP", "#", "3.4"], ["Summer Projects", "#", "3.5"], ["Competition", "#", "3.6"], ["Informal Session", "#", "3.7"], ["Resumes", "#", "3.8"], ["Alumnus", "#", "3.9"], ["Merchs.", "#", "3.10"]]
    },
    {
        name: ["Team"],
        subitems: [["Team","/team","0.4"],["Department Head", "/team", "4.1"], ["Advisor", "#", "4.2"], ["Coordinator", "#", "4.3"], ["Head", "#", "4.4"], ["Secretaries", "#", "4.5"], ["Past Teams", "#", "4.6"]]
    },
]


const Menu = items.map((i) => {

    return (
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

                    <NavDropdown renderMenuOnMount={true} title={i.name[0]} id="basic-nav-dropdown">
                        {Sub_list(i.subitems)}
                    </NavDropdown>

            </Nav>
        </Navbar.Collapse>
    )
})
function Sub_list(i) {
    const l = i.map((j) => {
        return (

                <NavDropdown.Item key={j[2]} href={j[1]}>{j[0]}</NavDropdown.Item>

        )
    })

    return l
}


function Menubar() {


    return (
        <Navbar sticky="top" bg="light" expand="lg" id="menubar">
            <Container>
                <Navbar.Brand href="/">SOCE-IITK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto justify-content-center">
                        {Menu}
                        <Nav.Link href="/contact-us">Contact-us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menubar;