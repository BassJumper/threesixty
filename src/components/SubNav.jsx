import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import SideNav from  "../components/SideNav";

class SubNav extends Component {
    componentDidMount() {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("is-sticky");
            } else {
                elem.classList.remove("is-sticky");
            }
        });
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }

    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }

    render() {
        return (
            <>
                <Navbar
                    sticky="top"
                    id="navbar"
                    bg="light"
                    expand="lg"
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    collapseOnSelect={true}
                >
                    <Container>
                         <Navbar.Brand >
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={800}
                            >
                                <img src="https://membership.threesixtyservices.co.uk/images/svg/portal_logo_primary.svg" className="logoImage" />
                            </Link>
                        </Navbar.Brand>

                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            id="collaspe-btn" 
                        />
                        
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Item>
                                    <li
                                        className="nav-link"
                                    >
                                        <a href="/">Home</a>
                                    </li>
                                </Nav.Item>

                                <Nav.Item>
                                    <li
                                        className="nav-link"
                                    >
                                        <a href="/">Who We Are</a>
                                    </li>
                                </Nav.Item>

                                <Nav.Item>
                                <li
                                        className="nav-link"
                                     
                                    >
                                        <a href="/">Our Services</a>
                                    </li>
                                </Nav.Item>

                                <Nav.Item>
                                    <li
                                        className="nav-link"
                                    >
                                        <a href="/">Our Team</a>
                                    </li>
                                </Nav.Item>

                                <Nav.Item>
                                <li
                                    className="nav-link"
                                    >
                                        <a href="/">Why Choose Us</a>
                                    </li>
                                </Nav.Item>

                                <Nav.Item>
                                    <li
                                        className="nav-link">
                                        <a href="/">Blogs</a>
                                    </li>
                                </Nav.Item>

                                <Nav.Item>
                                    <li
                                        className="nav-link"
                                    >
                                        <a href="/">Contact Us</a>
                                    </li>
                                </Nav.Item>
                                    
                                <Nav.Item>
                                    <SideNav />
                                </Nav.Item>
                            </Nav> 
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            </> 
        );
    }
}

export default SubNav;
