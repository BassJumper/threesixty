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
                    title={"Our dummy page"} 
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

                <Services title="Our services, at a glance" 
                    description="Here are some of the many services we offer here at threesixty."
                    items={[
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
                    ]} 
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
                
                <TestimonialCTA 
	                testimonialImage={"team-img4.jpg"}
                    testimonialTitle={"Claudia Clay"}
                    testimonialQuote={"We have worked with threesixty for over 5 years and value their partnership as an extension of our own business."}
                    testimonialSubTitle={"Risk and Regulatory Director, The Private Office Ltd"}
                    ctaTitle="Consecuterot adisping elit anm sit."
                    ctaContent="<p>Sed ultrices eros faucibus risus malesuada consectetur. Cras quis tincidunt elit. Mauris nec porta neque. Quisque in mi et quam elementum efficitur.</p><p>Aenean egestas odio eu hendrerit interdum. Ut aliquam sit amet metus sit amet ornare. Vivamus pulvinar ut mi non egestas. Morbi semper imperdiet aliquet. Integer venenatis tellus placerat neque cursus, et porttitor leo tempus.</p>"
	                ctaUrl="#"
	                ctaText="Our services"
                /> 

                <TeamCarousel 
                     title="Our Team"
                     description="Meet our expert team of highly qualified and experienced superheroes!"
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

                <TwoColumnCTA 
                    title="Lorem ipsium dolor sit amet, constutuero adispging elit nam sit."
                    content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa.</p><p>Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Placerat orci nulla pellentesque dignissim enim. Sed augue lacus viverra vitae congue eu consequat ac. </p><p>Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Vestibulum lectus mauris ultrices eros. Suspendisse ultrices gravida dictum fusce ut placerat.</p>"
	                ctaTitle="Consecuterot adisping elit anm sit."
	                ctaImage={null}
	                ctaContent="<p>Sed utlerics edor facuibus risi malesuad consuectoreur</p><h4><b style='font-size: 40px; color: #040041;'>£150</b> per month</h4>"
	                ctaLink="#"
	                ctaText="Our services"
                    alignCTALeft={true}
                /> 

                <ContactUs />

                <TwoColumnCTA 
                    title="Lorem ipsium dolor sit amet, constutuero adispging elit nam sit."
                    content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa.</p><p>Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Placerat orci nulla pellentesque dignissim enim. Sed augue lacus viverra vitae congue eu consequat ac. </p><p>Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Vestibulum lectus mauris ultrices eros. Suspendisse ultrices gravida dictum fusce ut placerat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa.</p><p>Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Placerat orci nulla pellentesque dignissim enim. Sed augue lacus viverra vitae congue eu consequat ac. </p><p>Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Vestibulum lectus mauris ultrices eros. Suspendisse ultrices gravida dictum fusce ut placerat.</p>"
	                ctaTitle="Consecuterot adisping elit anm sit."
	                ctaImage={"main-banner3.jpg"}
	                ctaContent="<p>Sed utlerics edor facuibus risi malesuad</p><p>Sal consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>"
	                ctaLink="#"
	                ctaText="Our services"
                /> 
                
                <NewsCarousel  
                    title="Already a threesixty client?"
                    description="Articles from our Research Panel and Field Experts to summarise and simplify."
                    items={[
                        {
                            imglink: "/blogpostdemo",
                            image: require("../assets/img/blog-img1.jpg"),
                            titlelink: "#",
                            title: "Corporate Giants Luftwanga now introduce new GDPR EU Regulations circa 2023",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                            btnlink: "#",
                            btnname: "Read more",
                        },
                        {
                            imglink: "/blogpostdemo",
                            image: require("../assets/img/blog-img2.jpg"),
                            titlelink: "#",
                            title: "Many are returning to Offices but is this the right move?  We delve into this more.",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                            btnlink: "#",
                            btnname: "Read more",
                        },
                        {
                            imglink: "/blogpostdemo",
                            image: require("../assets/img/blog-img3.jpg"),
                            titlelink: "#",
                            title: "Home offices are getting a face lift thanks to threesixty services enterprising new approach.",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                            btnlink: "#",
                            btnname: "Read more",
                        }
                ]} />


                <Footer />
                <ScrollUpBtn />
            </>
        );
    }

}

export default DummyPage;


