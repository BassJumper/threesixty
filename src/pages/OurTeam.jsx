import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import TeamCarousel from "../components/TeamCarousel";
import ScrollUpBtn from "../components/ScrollUpBtn";
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import InfoBar from '../components/InfoBar';

class DummyPage extends Component {

    render() {
        return (
            <>
                <NavBar />

                <Banner 
                    title={"Our team"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa."} 
                    ctaText={"Get in touch now"} 
                    ctaUrl={"/contactus"} />

                <TeamCarousel 
                     title="Our Team"
                     items={[
                     {
                         img: require("../../src/assets/img/team-img1.jpg"),
                         name: "Russell Stacey",
                         profession: "Managing Director",
                         socialicon1: "icofont-facebook",
                         sociallink1: "#",
                         socialicon2: "icofont-twitter",
                         sociallink2: "#",
                         socialicon3: "icofont-instagram",
                         sociallink3: "#",
                         socialicon4: "icofont-linkedin",
                         sociallink4: "#",
                     },
                     {
                         img: require("../../src/assets/img/team-img2.jpg"),
                         name: "Laura Chuck",
                         profession: "Finance Director",
                         socialicon1: "icofont-facebook",
                         sociallink1: "#",
                         socialicon2: "icofont-twitter",
                         sociallink2: "#",
                         socialicon3: "icofont-instagram",
                         sociallink3: "#",
                         socialicon4: "icofont-linkedin",
                         sociallink4: "#",
                     },
                     {
                         img: require("../../src/assets/img/team-img5.jpg"),
                         name: "Sally Simpson",
                         profession: "Head of Information",
                         socialicon1: "icofont-facebook",
                         sociallink1: "#",
                         socialicon2: "icofont-twitter",
                         sociallink2: "#",
                         socialicon3: "icofont-instagram",
                         sociallink3: "#",
                         socialicon4: "icofont-linkedin",
                         sociallink4: "#",
                     },
                     {
                         img: require("../../src/assets/img/team-img4.jpg"),
                         name: "Sarah Williamson",
                         profession: "Discretionary Management",
                         socialicon1: "icofont-facebook",
                         sociallink1: "#",
                         socialicon2: "icofont-twitter",
                         sociallink2: "#",
                         socialicon3: "icofont-instagram",
                         sociallink3: "#",
                         socialicon4: "icofont-linkedin",
                         sociallink4: "#",
                     },
                     {
                         img: require("../../src/assets/img/team-img3.jpg"),
                         name: "Ben Woodward",
                         profession: "Accounts Manager",
                         socialicon1: "icofont-facebook",
                         sociallink1: "#",
                         socialicon2: "icofont-twitter",
                         sociallink2: "#",
                         socialicon3: "icofont-instagram",
                         sociallink3: "#",
                         socialicon4: "icofont-linkedin",
                         sociallink4: "#",
                     },
                     {
                         img: require("../../src/assets/img/team-img1.jpg"),
                         name: "Russell Facer",
                         profession: "Managing Director",
                         socialicon1: "icofont-facebook",
                         sociallink1: "#",
                         socialicon2: "icofont-twitter",
                         sociallink2: "#",
                         socialicon3: "icofont-instagram",
                         sociallink3: "#",
                         socialicon4: "icofont-linkedin",
                         sociallink4: "#",
                     },
                     {
                         img: require("../../src/assets/img/team-img2.jpg"),
                         name: "Laura Chuck",
                         profession: "Finance Director",
                         socialicon1: "icofont-facebook",
                         sociallink1: "#",
                         socialicon2: "icofont-twitter",
                         sociallink2: "#",
                         socialicon3: "icofont-instagram",
                         sociallink3: "#",
                         socialicon4: "icofont-linkedin",
                         sociallink4: "#",
                     },
                     {
                         img: require("../../src/assets/img/team-img5.jpg"),
                         name: "Sally Simpson",
                         profession: "Head of Information",
                         socialicon1: "icofont-facebook",
                         sociallink1: "#",
                         socialicon2: "icofont-twitter",
                         sociallink2: "#",
                         socialicon3: "icofont-instagram",
                         sociallink3: "#",
                         socialicon4: "icofont-linkedin",
                         sociallink4: "#",
                     },
                     {
                         img: require("../../src/assets/img/team-img4.jpg"),
                         name: "Sarah Donaldson",
                         profession: "Discretionary Management",
                         socialicon1: "icofont-facebook",
                         sociallink1: "#",
                         socialicon2: "icofont-twitter",
                         sociallink2: "#",
                         socialicon3: "icofont-instagram",
                         sociallink3: "#",
                         socialicon4: "icofont-linkedin",
                         sociallink4: "#",
                     },
                     {
                         img: require("../../src/assets/img/team-img3.jpg"),
                         name: "Ben Woodward",
                         profession: "Accounts Manager",
                         socialicon1: "icofont-facebook",
                         sociallink1: "#",
                         socialicon2: "icofont-twitter",
                         sociallink2: "#",
                         socialicon3: "icofont-instagram",
                         sociallink3: "#",
                         socialicon4: "icofont-linkedin",
                         sociallink4: "#",
                     }]}
                />

                <InfoBar modClass={"thin-strip"} />

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


