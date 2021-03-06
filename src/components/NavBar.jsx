import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import SideNav from  "../components/SideNav";

class NavBar extends Component {
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
                            <a href="/"><img src="https://membership.threesixtyservices.co.uk/images/svg/portal_logo_white.svg" /></a>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            id="collaspe-btn" 
                        />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Item>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                </Nav.Item>
                                <Nav.Item>
                                    <li>
                                        <a href="/whoweworkwith">Who we are</a>
                                    </li>
                                </Nav.Item>
                                <Nav.Item>
                                    <li>
                                        <a href="/ourservices">Our services</a>
                                    </li>
                                </Nav.Item>
                                <Nav.Item>
                                    <li>
                                        <a href="/ourteam">Our Team</a>
                                    </li>
                                </Nav.Item>
                                <Nav.Item>
                                <li>
                                        <a href="/whychooseus">Why choose us</a>
                                    </li>
                                </Nav.Item>
                                <Nav.Item>
                                    <li>
                                        <a href="/blog">Blog</a>
                                    </li>
                                </Nav.Item>
                                <Nav.Item>
                                    <li>
                                        <a href="/contactus">Contact us</a>
                                    </li>
                                </Nav.Item>
                                <Nav.Item>
                                       <a
                                            href="https://ci-portal-website.azurewebsites.net/"
                                            target="_blank"
                                            className ={"btn btn-primary btn-signin opacityOne"}
                                        >
                                            Sign in
                                        </a>
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

export default NavBar;
