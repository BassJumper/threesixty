import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from "react-owl-carousel3";

export class TestimonialsCarousel extends Component {
    render() {
        const testimonials = this.props.items.map((item, index ) =>(
            <div className="col-lg-12 col-md-12 col-sm-12" key={index}>
                <div className="single-testimonial">
                    <div className="client-info">
                        <div className="img testimonial-img">
                            <img src={item.image} alt="client" />
                        </div>
                        <h4>{item.name}</h4>
                        <span>{item.profession}</span>
                    </div>
                    <p>{item.content}</p>
                    <i className="icofont-quote-right" />
                </div>
            </div>
        ));

        return (
            <>
                <section id="testimonials" className="testimonial-area ptb-100 bg-f9f9f9">
                    <div className="container">
                        <div className="section-title">
                            <h2><b>{this.props.title}</b></h2>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="row">
                            <OwlCarousel 
                                className="testimonial-slides owl-theme"
                                loop={true}
                                autoplay={true}
                                nav={false}
                                mouseDrag={true}
                                autoplayHoverPause={true}
                                responsiveClass={true}
                                dots={true}
                                navText={[
                                    "<i class='icon icon-Arrow'></i>",
                                    "<i class='icon icon-Arrow'></i>"
                                ]}
                                responsive={{
                                    0:{
                                        items:1,
                                    },
                                    768:{
                                        items:2,
                                    },
                                    1200:{
                                        items:3,
                                    }
                                }}
                            >
                                {testimonials}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
TestimonialsCarousel.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array
}

TestimonialsCarousel.defaultProps = {
    title: "What our clients say",
    description: "Here are just a few words from some of our existing clients.",
    items:[
        {
            image: require("../../src/assets/img/client-avatar1.jpg"),
            name: "Dr. Antonia Pottersby PHD",
            profession: "Independant Advisor",
            content: "Without the expert hand of Sally and the team at threesixty I don't think we would still be here today - Thank you so much team.",
        },
        {
            image: require("../../src/assets/img/client-avatar2.jpg"),
            name: "Sir. Michael Smith MD DMP HTP",
            profession: "Business Partner",
            content: "Simply put, these guys are the best - the one and only true resource for trusted proven and reliable compliance and information.",
        },
        {
            image: require("../../src/assets/img/client-avatar1.jpg"),
            name: "Michelle Gayle MDAP SDP",
            profession: "Finance Advisor",
            content: "Sometimes a person comes along and revolutionises everything for you - this was my experience with threesixty.",
        },
        {
            image: require("../../src/assets/img/client-avatar1.jpg"),
            name: "Sarah Collingsby MCP ATP DHP",
            profession: "Mortgage Advisor",
            content: "The online portal has saved me many times and the 365 support from affordable Silver Package has kept our heads above the water.",
        },
        {
            image: require("../../src/assets/img/client-avatar2.jpg"),
            name: "Dr. Antonia Pottersby PHD",
            profession: "Independant Advisor",
            content: "Without the expert hand of Sally and the team at threesixty I don't think we would still be here today - Thank you so much team.",
        },
        {
            image: require("../../src/assets/img/client-avatar1.jpg"),
            name: "Sir. Michael Smith MD DMP HTP",
            profession: "Business Partner",
            content: "Simply put, these guys are the best - the one and only true resource for trusted proven and reliable compliance and information.",
        },
        {
            image: require("../../src/assets/img/client-avatar2.jpg"),
            name: "Michelle Gayle MDAP SDP",
            profession: "Finance Advisor",
            content: "Sometimes a person comes along and revolutionises everything for you - this was my experience with threesixty.",
        },
    ]
}
export default TestimonialsCarousel
