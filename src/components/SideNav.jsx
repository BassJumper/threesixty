import React, { Component } from "react";
import { Nav, Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import Icofont from "react-icofont";

export class SideNav extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Nav.Link onClick={this.handleShow}>
                    <span></span>
                </Nav.Link>

                <Modal show={this.state.show} onHide={this.handleClose} className="right">
                    <Modal.Header closeButton></Modal.Header>

                    <Modal.Body>
                        <div className="logo">
                           <img src="https://membership.threesixtyservices.co.uk/images/svg/portal_logo_primary.svg" width="300px" />
                        </div>

                        <p>{this.props.content}</p>

                        <ul className="modal-contact-info">
                            <li>
                                <Icofont icon="icofont-google-map" /> 
                                <b><a href="https://maps.google.com/?daddr=The%20Royals,Altrincham%20Road%20Manchester%20M22%204BJ">The Royals, Altrincham Road</a></b>
                                {this.props.locationnormal}
                            </li>
                            <li>
                                <Icofont icon="icofont-ui-call" /> 
                                <a href="tel:03797360360" style={{fontWeight: "bold"}}>03797 360 360</a> or <a href="tel:0161488370" style={{fontWeight: "bold"}}>0161 488 370</a>
                                <br />{this.props.phonenormal}
                            </li>
                            <li>
                                <Icofont icon="icofont-envelope" /> 
                                <b><a href="mailto:talktous@threesixtyservices.co.uk">talktous@threesixtyservices.co.uk</a></b>
                                {this.props.mailnormal}
                            </li>
                        </ul>

                        <ul className="social-links">
                            <li>
                                <a href={this.props.facebooklink}><Icofont icon="icofont-facebook"/></a>
                            </li>
                            <li>
                                <a href={this.props.twitterlink}><Icofont icon="icofont-twitter"/></a>
                            </li>
                            <li>
                                <a href={this.props.instagramlink}><Icofont icon="icofont-instagram"/></a>
                            </li>
                            <li>
                                <a href={this.props.linkedinlink}><Icofont icon="icofont-linkedin"/></a>
                            </li>
                            <li>
                                <a href={this.props.pinterestlink}><Icofont icon="icofont-pinterest"/></a>
                            </li>
                        </ul>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

SideNav.PropsTypes = {
    logotext: PropTypes.string,
    logotextspan: PropTypes.string,
    content: PropTypes.string,
    locationbolt: PropTypes.string,
    locationnormal: PropTypes.string,
    phonebolt: PropTypes.string,
    phonenormal: PropTypes.string,
    mailbolot: PropTypes.string,
    mailnormal: PropTypes.string,
    facebooklink: PropTypes.string,
    twitterlink: PropTypes.string,
    instagramlink: PropTypes.string,
    linkedinlink: PropTypes.string,
    pinterestlink: PropTypes.string,
}

SideNav.defaultProps = {
    logotext: "three",
    logotextspan: "sixty",
    content: "threesixty have much planned for the future, working with great clients and continued compliance and information.  If you'd like to join our team, then we'd also love to hear from you.",
    locationbolt: "The Royals, Altrincham Road",
    locationnormal: "Manchester, M22 4BJ",
    phonebolt: "(03707) 360360",
    phonenormal: "Give us a call (Mon-Fri 9am-5pm)",
    mailbolot: "info@threesixtyservices.co.uk",
    mailnormal: "Drop us an e-mail and we'll get right back to you",
    facebooklink: "#",
    twitterlink: "#",
    instagramlink: "#",
    linkedinlink: "#",
    pinterestlink: "#",
}

export default SideNav;
