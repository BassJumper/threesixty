import React, { Component } from 'react';
import axios from "axios";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import PropTypes from 'prop-types';

export class ContactUs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            successMsg: ""
        };
    }
    handleForm = e => {
        let that = this;
        axios
            .post("https://formcarry.com/s/CHANGETHISTOOURAPI", this.state, {
                headers: { Accept: "application/json" }
            })
            .then(function(response) {
                document.getElementById("contactForm").reset();
                that.setState({
                    successMsg: "We received your submission"
                });
                document.getElementById("contactForm").reset();
            })
            .catch(function(error) {});
    };

    handleFields = e => this.setState({ [e.target.name]: e.target.value });

    render() {

        //Start ContactUs Loop
        const contactusdata = this.props.contactussData.map((contactus, index ) =>(
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="contact-box">
                    <div className="icon">
                        <i className={`${contactus.boxicon} contact-box-icon`}/>
                    </div>
                    <h4>{contactus.boxtitle}</h4>
                    <p><a href={contactus.boxitem1link}>{contactus.boxitem1}</a></p>
                    <p><a href={contactus.boxitem2link}>{contactus.boxitem2}</a></p>
                </div>
            </div>
        ));
        //End ContactUs Loop

        return (
            <>
                <section id="contact" className="contact-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2 >{this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b></h2>
                            <p >{this.props.sectionContent}</p> 
                        </div>

                        <div className="row justify-content-center">

                            {contactusdata}
                            
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="get-in-touch">
                                    <h3 >{this.props.title}</h3>
                                    <p>{this.props.content}</p>
                                    <ul>
                                        <li>
                                            <a href={this.props.fblink}  className="icofont-facebook"></a>
                                        </li>
                                        <li>
                                            <a href={this.props.twitterlink} className="icofont-twitter"></a>
                                        </li>
                                        <li>
                                            <a href={this.props.instagramlink} className="icofont-instagram"></a>
                                        </li>
                                        <li>
                                            <a href={this.props.linkedinlink} className="icofont-linkedin"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <ValidationForm
                                    id="contactForm"
                                    onSubmit={(e, formData, inputs) => {
                                        e.preventDefault();
                                        this.handleForm(formData);
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="form-group">
                                                <TextInput
                                                    name="name"
                                                    id="name"
                                                    required
                                                    successMessage=""
                                                    errorMessage="Please enter your name"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    autoComplete="off"
                                                    onChange={
                                                        this.handleFields
                                                    }
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="form-group">
                                            <TextInput
                                                name="email"
                                                id="email"
                                                type="email"
                                                required
                                                successMessage=""
                                                errorMessage="Please enter your email address"
                                                className="form-control"
                                                placeholder="Email"
                                                autoComplete="off"
                                                onChange={
                                                    this.handleFields
                                                }
                                            />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                            <TextInput
                                                name="message"
                                                id="description"
                                                multiline
                                                placeholder="Your message"
                                                className="form-control"
                                                required
                                                successMessage=""
                                                errorMessage="Please write your message"
                                                rows="5"
                                                autoComplete="off"
                                                onChange={
                                                    this.handleFields
                                                }
                                            />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <button type="submit" className="btn btn-primary">Send message</button>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>  
                                </ValidationForm>
                                
                                {this.state.successMsg !== "" ? (
                                    <h3 className="contactMsg">
                                        {this.state.successMsg}
                                    </h3>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

ContactUs.propTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    fblink: PropTypes.string,
    twitterlink: PropTypes.string,
    instagramlink: PropTypes.string,
    linkedinlink: PropTypes.string,
    contactussData: PropTypes.array,
}

ContactUs.defaultProps = {
    sectionTitle: "Contact",
    sectionTitleSpan: "us",
    sectionContent: "We would love to hear from you whether you're an existing customer looking for help or a new prospect enquiring about our services.",
    title: "Get in touch",
    content: "Here's a handy little form to ping us a message if you'd prefer and someone will e-mail or call you back ASAP.",
    fblink: "#",
    twitterlink: "#",
    instagramlink: "#",
    linkedinlink: "#",
    contactussData:[
        {
            boxicon: "icofont-location-pin",
            boxtitle: "Address",
            boxitem1link: "https://maps.google.com/?daddr=The%20Royals,Altrincham%20Road%20Manchester%20M22%204BJ",
            boxitem1: "The Royals, Altrincham Road",
            boxitem2link: "https://maps.google.com/?daddr=The%20Royals,Altrincham%20Road%20Manchester%20M22%204BJ",
            boxitem2: "Manchester, M22 4BJ",
        },
        {
            boxicon: "icofont-mail",
            boxtitle: "Email",
            boxitem1link: "mailto:info@threesixtyservices.co.uk",
            boxitem1: "info@threesixtyservices.co.uk",
            boxitem2link: "mailto:support@threesixtyservices.co.uk",
            boxitem2: "support@threesixtyservices.co.uk",
        },
        {
            boxicon: "icofont-phone",
            boxtitle: "Phone",
            boxitem1link: "tel:03797360360",
            boxitem1: "(03707) 360360",
            boxitem2link: "tel:01614883370",
            boxitem2: "0161 488 3370",
        }
    ]
}
export default ContactUs
