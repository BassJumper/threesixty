import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Footer from "../components/Footer";
import Services from "../components/Services";
import ScrollUpBtn from "../components/ScrollUpBtn";

class DummyPage extends Component {

    render() {
        return (
            <>
                <NavBar />

                <Banner 
                    title={"Our services"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean egestas odio eu hendrerit interdum. Ut aliquam sit amet metus sit amet ornare. Vivamus pulvinar ut mi non egestas."} 
                />
                
                <Services title="Our services, at a glance" 
                    description="Here are some of the many services we offer here at threesixty."
                    items={[
                        {
                            icon: "icofont-library",
                            title: "Online portal",
                            content: "Click here to get more info on our super cool super new Online Portal, developed in-house right here at threesixty.",
                            bgnumber: "1",
                            url: "/service"
                        },
                        {
                            icon: "icofont-pen-alt-3",
                            title: "Risk assessments",
                            content: "Everything you need to know about risk assessments and much more can be found my clicking on this magic tile.",
                            bgnumber: "2",
                            url: "/service"
                        },
                        {
                            icon: "icofont-graduate-alt",
                            title: "Training seminars",
                            content: "Come and learn with the best in the business at our Seminars.  Click for more info and our world wide schedule.",
                            bgnumber: "3",
                            url: "/service"
                        },
                        {
                            icon: "icofont-headphone-alt-2",
                            title: "Helpdesk support",
                            content: "24/7 support available to our valued members.  Click right here right now to learn more about our pricing and offers.",
                            bgnumber: "4",
                            url: "/service"
                        },
                        {
                            icon: "icofont-test-tube-alt",
                            title: "Product research",
                            content: "Extensive product and fund research actioned by our expert team so we can bring clarity to sometimes obsure policies and regulations.",
                            bgnumber: "5",
                            url: "/service"
                        },
                        {
                            icon: "icofont-globe-alt",
                            title: "Events",
                            content: "Click here to go to our New Shiny EVENTS Management System - developed in-house at threesixty by our talented Developers.",
                            bgnumber: "6",
                            url: "/service"
                        }
                    ]} 
                />
                
                <TestimonialsCarousel 
                    title="What our clients say"
                    description="Here are just a few words from some of our existing clients."
                    items={[
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
                        }
                    ]}
                />

                <Footer />
                <ScrollUpBtn />
            </>
        );
    }

}

export default DummyPage;


