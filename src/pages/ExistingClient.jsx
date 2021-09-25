import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import LinksGrid from "../components/LinksGrid";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Footer from "../components/Footer";
import Services from "../components/Services";
import TeamCarousel from "../components/TeamCarousel";
import TwoColumnCTA from "../components/TwoColumnCTA";
import ContactUs from "../components/ContactUs";
import ScrollUpBtn from "../components/ScrollUpBtn";
import NewsCarousel from '../components/NewsCarousel';
import InfoBar from '../components/InfoBar';
import TestimonialCTA from '../components/TestimonialCTA';

class DummyPage extends Component {

    render() {
        return (
            <>
                <NavBar />

                <Banner 
                    title={"Directly authorised"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing eli.  Aenean egestas odio eu hendrerit interdum. Ut aliquam sit amet metus sit amet ornare. Vivamus pulvinar ut mi non egestas."} 
                />

                <TwoColumnCTA 
                    title="Lorem ipsium dolor sit amet, constutuero adispging elit nam sit."
                    content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa.</p><p>Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Placerat orci nulla pellentesque dignissim enim. Sed augue lacus viverra vitae congue eu consequat ac. </p><p>Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Vestibulum lectus mauris ultrices eros. Suspendisse ultrices gravida dictum fusce ut placerat.</p>"
	                ctaTitle="Consecuterot adisping elit anm sit."
	                ctaContent="<p>Sed consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>"
	                ctaUrl="#"
	                ctaText="Our services"
                /> 

                <InfoBar 
                    modClass={"thin-strip"}
                    items={[
                    {
                        icon: "icofont-check-circled",
                        title: "Highly qualified",
                        content:
                            "threesixty delivers support and personalised solutions to over 900 directly regulated IFA practices, including over 100 discretionary management firms (more than 9,000 registered individuals)."
                        },
                    {
                        icon: "icofont-check-circled",
                        title: "Extensive experience",
                        content:
                            "With a focus on investment orientated businesses, clients range from substantial national and regional sized firms to niche boutique investment managers and financial planners."
                        },
                    {
                        icon: "icofont-check-circled",
                        title: "Trusted & proven",
                        content:
                            "Through our in-house training and development, we make sure our staff have the appropriate knowledge, experience or qualifications relevant to their roles and the areas assisting our clients."
                    }
                ]} />

                <TwoColumnCTA 
                    title="Lorem ipsium dolor sit amet, constutuero adispging elit nam sit."
                    content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor mauris vel aliquam auctor. Donec quis ipsum auctor, lobortis nunc vel, molestie leo. Suspendisse non mi a ligula efficitur molestie quis id arcu.</p>
                    <ul class='arrow-list'>
                        <li>Donec quis ipsum auctor, lobortis nunc vel, molestie leo. Suspendisse non mi a ligula efficitur molestie quis id arcu.</li>
                        <li>Pellentesque dictum, felis id vestibulum sodales, nisl lacus bibendum ipsum, sed posuere dui nibh non justo. Curabitur at erat faucibus, viverra tellus vel, ornare fells.</li>
                        <li>Fusce quis vehicula lectus, eget finibus nulla. Pellentesque fermentum sed odio nec finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec imperdiet elit, id aliquet urna.</li>
                        <li>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ut nibh libero. Praesent in sodales mi.</li>
                    </ul>
                    <p>Pellentesque dictum, felis id vestibulum sodales, nisl lacus bibendum ipsum, sed posuere dui nibh non justo. Curabitur at erat faucibus, viverra tellus vel, ornare felis. Fusce quis vehicula lectus, eget finibus nulla.</p>
                    "
	                ctaTitle="Consecuterot adisping elit anm sit."
	                ctaImage={"main-banner3.jpg"}
	                ctaContent="<p>Sed utlerics eros faucibus risus malesuada consectutor.</p>"
	                ctaLink="#"
	                ctaText="Why choose us?"
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

export default DummyPage;


