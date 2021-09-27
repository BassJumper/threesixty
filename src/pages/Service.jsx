import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Services from "../components/Services";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import TwoColumnCTA from "../components/TwoColumnCTA";
import ScrollUpBtn from "../components/ScrollUpBtn";

class Service extends Component {

    render() {
        return (
            <>
                <NavBar />

                <Banner 
                    title={"Lite"} 
                    description={"Vitae tortor condimentum lacinia quis vel eros donec ac. Pretium vulputate sapien nec sagittis. Mauris nunc congue nisi vitae suscipit tellus mauris. Magna sit amet purus gravida quis blandit."} 
                    ctaText={"Get in touch now"} 
                    ctaUrl={"#"} />

                <TwoColumnCTA 
                    title="Lorem ipsum dolor sit amet, consectetuero adisspging elit nam sit."
                    content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor mauris vel aliquam auctor. Donec quis ipsum auctor, lobortis nunc vel, molestie leo. Suspendisse non mi a ligula efficitur molestie quis id arcu.
                    </p><p>Donec quis ipsum auctor, lobortis nunc vel, molestie leo. Suspendisse non mi a ligula efficitur molestie quis id arcu. Donec quis ipsum auctor, lobortis nunc vel, molestie leo. Suspendisse non mi a ligula efficitur molestie quis id arcu. Donec quis ipsum auctor, lobortis nunc vel, molestie leo. Suspendisse non mi a ligula efficitur molestie quis id arcu.
                    </p>"
	                ctaTitle="Consecuterot adisping elit anm sit."
	                ctaContent="<p>Sed utlerics edor facuibus risi malesuad</p><p>Sal consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>"
	                ctaUrl="/whoweworkwith"
	                ctaText="Who we work with"
                /> 

                <Services title="Lite services include" 
                    modClass={"alternate-background"}
                    description=""
                    items={[
                        {
                            icon: "icofont-pen-alt-3",
                            title: "Phasellus posuere, risus",
                            content: "Fusce quis vehicula lectus, eget finibus nulla. Pallentesque fermentum sed odio nec finibus. Lorem ipsum dolor sit amet.",
                            bgnumber: "1",
                            url: "#"
                        },
                        {
                            icon: "icofont-pen-alt-3",
                            title: "Fusce quis vehicula",
                            content: "Lisar dia mi ha, eget finibus nulla. Pallentesque fermentum sed odio nec finibus. Lorem ipsum dolor sit amet.",
                            bgnumber: "2",
                            url: "#"
                        },
                        {
                            icon: "icofont-graduate-alt",
                            title: "Vestibulum ut turpis at",
                            content: "Fusce quis vehicula lectus, eget finibus nulla. Pallentesque fermentum sed odio nec finibus. Lorem ipsum dolor sit amet.",
                            bgnumber: "3",
                            url: "#"
                        },
                        {
                            icon: "icofont-headphone-alt-2",
                            title: "Curabitur at era faucibus",
                            content: "Lisar dia mi ha, eget finibus nulla. Pallentesque fermentum sed odio nec finibus. Lorem ipsum dolor sit amet.",
                            bgnumber: "4",
                            url: "#"
                        },
                        {
                            icon: "icofont-test-tube-alt",
                            title: "Interum et maesuada",
                            content: "Fusce quis vehicula lectus, eget finibus nulla. Pallentesque fermentum sed odio nec finibus. Lorem ipsum dolor sit amet.",
                            bgnumber: "5",
                            url: "#"
                        },
                        {
                            icon: "icofont-globe-alt",
                            title: "Curabitur sagittis mi",
                            content: "Lisar dia mi ha, eget finibus nulla. Pallentesque fermentum sed odio nec finibus. Lorem ipsum dolor sit amet.",
                            bgnumber: "6",
                            url: "#"
                        }
                    ]} 
                />
             
                <TwoColumnCTA 
                    title="Who is this service for?"
                    content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor mauris vel aliquam auctor. Donec quis ipsum auctor, lobortis nunc vel, molestie leo. Suspendisse non mi a ligula efficitur molestie quis id arcu.</p>
                    <p>Sed aliquam lobortis nisi eu vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum fringilla, quam ac ultrices rhoncus, sapien mi malesuada nisi, et posuere mauris arcu at leo. Aenean egestas odio eu hendrerit interdum. Ut aliquam sit amet metus sit amet ornare.</p>
                    <p>Vivamus pulvinar ut mi non egestas. Morbi semper imperdiet aliquet. Integer venenatis tellus placerat neque cursus, et porttitor leo tempus.</p>"
	                ctaTitle="Pellentesque sagittis mauris"
	                ctaImage={null}
	                ctaContent="<p>Sed utlerics edor facuibus risi malesuad consuectoreur. Praesent dignissim aliquam quam id faucibus.</p><h4><b style='font-size: 40px; color: #040041;'>£150</b> per month</h4>"
	                ctaUrl="/contactus"
	                ctaText="Get in touch"
                    alignCTALeft={true}
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

export default Service;


