import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Footer from "../components/Footer";
import ScrollUpBtn from "../components/ScrollUpBtn";
import NewsCarousel from '../components/NewsCarousel';

class Blog extends Component {

    render() {
        return (
            <>
                <NavBar />

                <Banner 
                    title={"Blog"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa. Dansit sed happiness morbi tincidunt ornare massa."} 
                />

                <div className="welcome-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2><b>Latest Articles</b></h2>
                            <p>Here are a handful of our most recent articles which of course are completely made up for demo purposes</p>
                        </div>
                        <div className="row">
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <img src={require("../assets/img/artist.jpg")}></img>
                                <h5>How art can lift our dampened spirits</h5>
                                <p>24 September 2021</p>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <img src={require("../assets/img/another3.jpg")}></img>
                                <h5>Richard Branson visits threesixty</h5>
                                <p>22 September 2021</p>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <img src={require("../assets/img/ecar.png")}></img>
                                <h5>E-Cars no longer a thing of the future</h5>
                                <p>19 September 2021</p>
                            </div>
                            
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <img src={require("../assets/img/another4.jpg")}></img>
                                <h5>Our annual staff trip to Florence, Italy</h5>
                                <p>14 September 2021</p>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <img src={require("../assets/img/salad.jpg")}></img>
                                <h5>Working lunches got a lot more spicy</h5>
                                <p>12 September 2021</p>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <img src={require("../assets/img/wfh.jpg")}></img>
                                <h5>Our five star working from guide</h5>
                                <p>29 August 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
              

                {/* <NewsCarousel  
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
                ]} /> */}

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

export default Blog;


