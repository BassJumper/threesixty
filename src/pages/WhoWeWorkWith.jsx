import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import LinksGrid from "../components/LinksGrid";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Footer from "../components/Footer";
import ScrollUpBtn from "../components/ScrollUpBtn";

class DummyPage extends Component {

    render() {
        return (
            <>
                <NavBar />

                <Banner 
                    title={"Who we work with"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} 
                    ctaText={"Optional Button"} 
                    ctaUrl={"#"} />

                <LinksGrid 
                    title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa."} 
                    items={[
                        {
                            icon: "icofont-rocket-alt-2",
                            title: "New start businesses",
                            imageUrl: "",
                            url: "#",
                            description: "threesixty delivers support and personalised solutions to over 900 directly regulated IFA practices, including 100+ discretionary mgmt firms (more than 9,000 registered)."
                        },
                        {
                            icon: "icofont-vehicle-delivery-van",
                            title: "Moving from a network",
                            imageUrl: "",
                            url: "#",
                            description: "With a focus on investment orientated businesses, clients range from substantial national and regional sized firms to niche boutique investment managers and financial planners."
                        },
                        {
                            icon: "icofont-id",
                            title: "Directly authorised",
                            imageUrl: "",
                            url: "#",
                            description: "Through our in-house training and development, we make sure our staff have the appropriate knowledge, experience or qualifications relevant to their roles and the areas for clients."
                        },
                        {
                            icon: "icofont-business-man-alt-2",
                            title: "Discretionary managers",
                            imageUrl: "",
                            url: "#",
                            description: "With a focus on investment orientated businesses, clients range from substantial national and regional sized firms to niche boutique investment managers and financial planners."
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


