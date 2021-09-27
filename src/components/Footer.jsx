import React, { Component } from "react";
import PropTypes from "prop-types";

export class Footer extends Component {

  render() {

    const version = "0.4.2";

    return (
        <>
        <footer className="footer-area">
             <i class="blue-icon icofont-anchor watermark-anchor"></i>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 footer-logo">
                            <img src="https://membership.threesixtyservices.co.uk/images/svg/portal_logo_white.svg" />
                        </div>
                    </div>
                    <div className="footer-grid">
                        <div className="footer-address">
                            <h4>Find us at</h4>
                            <a href="https://maps.google.com/?daddr=The%20Royals,Altrincham%20Road%20Manchester%20M22%204BJ">
                                <address>
                                    threesixty services LLP,
                                    The Royals,
                                    Altrincham Road,
                                    Manchester,
                                    M22 4BJ
                                </address>
                            </a>
                        </div>
                        <div>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="footer-address">
                            <h4>Contact us on</h4>
                            <address>
                            <a href="tel:03797360360">03797 360 360</a> or <a href="tel:0161488370">0161 488 370</a><br />
                                9am to 5pm Monday - Friday
                                (excluding bank holidays)
                                           
                                <a href="mailto:talktous@threesixtyservices.co.uk">talktous@threesixtyservices.co.uk</a>
                            </address>
                        </div>
                        <div>
                            <div className="vertical-line"></div>
                        </div>
                        <div>
                            <h4>Follow us</h4>
                            <div>
                                <a href="https://twitter.com/threesixtySvcs" className="social-icon" target="_self" role="img" title="threesixty Twitter"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.62 7.627c.898-.674 1.706-1.482 2.335-2.426a8.841 8.841 0 0 1-2.695.719 4.609 4.609 0 0 0 2.066-2.606 9.963 9.963 0 0 1-2.965 1.168A4.717 4.717 0 0 0 16.902 3a4.716 4.716 0 0 0-4.717 4.717c0 .36.045.719.135 1.078a13.685 13.685 0 0 1-9.748-4.941c-.404.673-.629 1.482-.629 2.38 0 1.618.809 3.055 2.112 3.909-.764-.045-1.528-.225-2.157-.584v.045a4.723 4.723 0 0 0 3.774 4.627c-.36.09-.809.18-1.213.18-.314 0-.584-.046-.898-.09.584 1.886 2.335 3.234 4.402 3.279a9.483 9.483 0 0 1-5.84 2.021c-.404 0-.764-.045-1.123-.09 2.066 1.348 4.537 2.112 7.232 2.112 8.67 0 13.387-7.143 13.387-13.387v-.63z" fill="#fff"></path></svg></a>
                                <a href="https://www.linkedin.com/company/threesixty-services" className="social-icon" target="_self" role="img" title="threesixty LinkedIn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.492 22.08V8.648H2.314V22.08h4.178zM4.381 6.852c1.348 0 2.426-1.123 2.426-2.471C6.807 3.078 5.729 2 4.38 2A2.397 2.397 0 0 0 2 4.38C2 5.73 3.078 6.853 4.38 6.853zm17.7 15.228h.044v-7.367c0-3.594-.809-6.379-5.031-6.379-2.022 0-3.37 1.123-3.953 2.156h-.045V8.648H9.098V22.08h4.177v-6.648c0-1.752.315-3.414 2.471-3.414s2.201 1.976 2.201 3.548v6.514h4.133z" fill="#fff"></path></svg></a>
                            </div>
                        </div>
                        <div>
                            <div className="vertical-line"></div>
                        </div>
                        <div>
                            <img src={require("../../src/assets/img/award2.png")} />
                            &nbsp; &nbsp;
                            <img src={require("../../src/assets/img/award1.jpg")} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-6 center">
                                <ul>
                                    <li>
                                        <a href={this.props.footercopyrightLink1}>
                                            (c) Copyright three sixty services LLP
                                        </a>
                                    </li>
                                    <li>
                                        <a href={this.props.footercopyrightLink2}>
                                            Privacy policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href={this.props.footercopyrightLink2}>
                                            Cookie policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href={this.props.footercopyrightLink2}>
                                            Terms of website use
                                        </a>
                                    </li>
                                    {/* TODO: Make the site version dynamic based on auto-incremented release number */}
                                    <li>
                                        Site Ver {version}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </footer>
            <footer className="mobile-footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 footer-logo">
                            <img src="https://membership.threesixtyservices.co.uk/images/svg/portal_logo_white.svg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <a href={this.props.footercopyrightLink1}>
                                        {this.props.footercopyrightText1}
                                    </a>
                                </li>
                                <li>
                                    <a href={this.props.footercopyrightLink2}>
                                        {this.props.footercopyrightText2}
                                    </a>
                                </li>
                                {/* TODO: Make the site version dynamic based on auto-incremented release number */}
                                <li className="site-version">
                                    Site Ver {version}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
  }
}

Footer.propTypes = {
    copyrightText: PropTypes.string,
    footercopyrightLink1: PropTypes.string,
    footercopyrightText1: PropTypes.string,
    footercopyrightLink2: PropTypes.string,
    footercopyrightText2: PropTypes.string
};
Footer.defaultProps = {
    copyrightText: "Copyright @ 2021 Three Sixty Services LLP. All rights reserved",
    footercopyrightLink1: "#",
    footercopyrightText1: "Terms & Conditions ",
    footercopyrightLink2: "#",
    footercopyrightText2: "Privacy Policy"
};

export default Footer;
