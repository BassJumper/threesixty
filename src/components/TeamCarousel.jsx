import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from "react-owl-carousel3";

export class TeamCarousel extends Component {
    render() {
        const items = this.props.items.map((item, index ) =>(
            <div className="col-lg-12 col-md-12 col-sm-12" key={index}>
                <div className="single-team">
                    <img src={item.img} alt="team-img" className="team-img" />
                  
                    <ul className="member-social-links wow fadeInUp">
                        <li>
                            <a href={item.sociallink1} className={item.socialicon1}></a>
                        </li>
                        <li>
                            <a href={item.sociallink2} className={item.socialicon2}></a>
                        </li>
                        <li>
                            <a href={item.sociallink3} className={item.socialicon3}></a>
                        </li>
                        <li>
                            <a href={item.sociallink4} className={item.socialicon4}>
                            </a>
                        </li>
                    </ul>
                  
                    <h3>{item.name}</h3>
                    <span>{item.profession}</span>
                </div>
            </div>
        ));

        return (
            <>
                <section id="team" className="team-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2><b>{this.props.title}</b></h2>
                            <p>{this.props.description}</p>
                        </div>

                        <div className="row">
                            <OwlCarousel 
                                className="team-slides owl-theme"
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
                                    576:{
                                        items:2,
                                    },
                                    768:{
                                        items:3,
                                    },
                                    1200:{
                                        items:4,
                                    }
                                }}
                            >
                                {items}
                            </OwlCarousel>
                        </div>
                    </div>

                    <div className="animation-box1">
                        <img src={require("../../src/assets/img/3.png")} alt="animateimage" />
                    </div>
                    <div className="animation-box2">
                        <img src={require("../../src/assets/img/4.png")} alt="animateimage" />
                    </div>
                    <div className="animation-box3">
                        <img src={require("../../src/assets/img/1.png")} alt="animateimage" />
                    </div>
                    <div className="animation-box4">
                        <img src={require("../../src/assets/img/5.png")} alt="animateimage" />
                    </div>
                </section>
            </>
        );
    }
}

TeamCarousel.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,
}

TeamCarousel.defaultProps = {
    title: "Our Team",
    description: "Meet our expert team of highly qualified and experienced superheroes.",
    items: [
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
    }]
}

export default TeamCarousel
