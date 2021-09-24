import React, { Component } from 'react';
import Icofont from "react-icofont";
import PropTypes from "prop-types";

export class Services extends Component {

    render() {
        const items = this.props.items.map((item, index ) =>(
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-services">
                    <Icofont icon={item.icon} />
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
            </div>
        ));

        return (
            <>
                <section id="services" className={`services-area ptb-100 ${this.props.modClass}`}>
                    <div className="container">
                        <div className="section-title">
                            <h2><b>{this.props.title}</b></h2>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="row">{items}</div>
                    </div>
                    <div className="animation-box5">
                        <img src={require("../../src/assets/img/vector-bg.png")} className="rotateme" alt="vector" />
                    </div>
                </section>
            </>
        );
    }
}

Services.propsTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    modClass: PropTypes.string,
    items: PropTypes.array
}

Services.defaultProps = {
    title: "Our services, at a glance",
    description: "Here are some of the many services we offer here at threesixty.",
    modClass: null,
    items: [
        {
            icon: "icofont-library",
            title: "Online portal",
            content: "Click here to get more info on our super cool super new Online Portal, developed in-house right here at threesixty.",
            bgnumber: "1"
        },
        {
            icon: "icofont-pen-alt-3",
            title: "Risk assessments",
            content: "Everything you need to know about risk assessments and much more can be found my clicking on this magic tile.",
            bgnumber: "2"
        },
        {
            icon: "icofont-graduate-alt",
            title: "Training seminars",
            content: "Come and learn with the best in the business at our Seminars.  Click for more info and our world wide schedule.",
            bgnumber: "3"
        },
        {
            icon: "icofont-headphone-alt-2",
            title: "Helpdesk support",
            content: "24/7 support available to our valued members.  Click right here right now to learn more about our pricing and offers.",
            bgnumber: "4"
        },
        {
            icon: "icofont-test-tube-alt",
            title: "Product research",
            content: "Extensive product and fund research actioned by our expert team so we can bring clarity to sometimes obsure policies and regulations.",
            bgnumber: "5"
        },
        {
            icon: "icofont-globe-alt",
            title: "Events",
            content: "Click here to go to our New Shiny EVENTS Management System - developed in-house at threesixty by our talented Developers.",
            bgnumber: "6"
        }
    ]
}

export default Services

