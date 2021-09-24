import React, { Component } from 'react';
import OwlCarousel from "react-owl-carousel3";
import PropTypes from "prop-types";

export class About extends Component {
  render() {
    return (
        <>
            <section 
                id="about" 
                className="about-area bg-f9f9f9"
            >
                <div className="container">
                    <div className="row">
                        <div className="about-image">
                            <img src={this.props.sectionImage} alt="about-img" />
                        </div>
                        
                        <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-6">
                            <div className="row">
                                <OwlCarousel 
                                    className="about-slider owl-theme"
                                    items={1}
                                    nav={false}
                                    dots={true}
                                    touchDrag={false}
                                    mouseDrag={false}
                                    autoplay={false}
                                    smartSpeed={700}
                                    loop={true}
                                    navText={[
                                        "<i class='icon icon-Arrow'></i>",
                                        "<i class='icon icon-Arrow'></i>"
                                    ]}
                                >
                                    <div className="col-lg-12">
                                        <div className="about-title">
                                            <h3>{this.props.skillToptitle} <b>{this.props.skillToptitlespan}</b></h3>
                                            <h5>{this.props.skillTitle} <span>{this.props.skillTitlespan}</span></h5>
                                            <p>{this.props.skillContent}</p>
                                        </div>

                                        <div className="our-skill">
                                            <div className="single-progress">
                                                <h3 className="progress-title">{this.props.progressTitle1}</h3>
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value">{this.props.progressValue1}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="single-progress">
                                                <h3 className="progress-title">{this.props.progressTitle2}</h3>
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value">{this.props.progressValue2}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="single-progress">
                                                <h3 className="progress-title">{this.props.progressTitle3}</h3>
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value">{this.props.progressValue3}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="single-progress">
                                                <h3 className="progress-title">{this.props.progressTitle4}</h3>
                                                <div className="progress">
                                                    <div className="progress-bar">
                                                        <div className="progress-value">{this.props.progressValue4}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="about-title">
                                            <h3>{this.props.item2topTitle} <b>{this.props.item2topTitlespan}</b></h3>
                                            <h5>{this.props.item2Title}<span> {this.props.item2Titlespan}</span></h5>
                                            <p>{this.props.item2ContentTop}</p>
                                        </div>
                                        
                                        <div className="our-mission">
                                            <p>{this.props.item2ContentMiddle}</p>
                                            <p>{this.props.item2ContentBottom}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="about-title">
                                            <h3>{this.props.item3TopTitle} <b>{this.props.item3TopTitleSpan}</b></h3>
                                            <h5>{this.props.item3Title} <span>{this.props.item3TitleSpan}</span></h5>
                                            <p>{this.props.item3Content}</p>
                                        </div>

                                        <div className="why-choose-us">
                                            <div className="row m-0">
                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo1} />
                                                        <h5>{this.props.log1Title}</h5>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo2}/>
                                                        <h5>{this.props.log2Title}</h5>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo3}/>
                                                        <h5>{this.props.log3Title}</h5>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo4}/>
                                                        <h5>{this.props.log4Title}</h5>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo5}/>
                                                        <h5>{this.props.log5Title}</h5>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-4 p-0">
                                                    <div className="single-choose">
                                                        <i className={this.props.logo6}/>
                                                        <h5>{this.props.log6Title}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
  }
}
About.propTypes = {
    sectionImage: PropTypes.string,

    animationImg1: PropTypes.string,
    animationImg2: PropTypes.string,
    animationImg3: PropTypes.string,
    animationImg4: PropTypes.string,

    skillToptitle: PropTypes.string,
    skillToptitlespan: PropTypes.string,
    skillTitle: PropTypes.string,
    skillTitlespan: PropTypes.string,
    skillContent: PropTypes.string,
    progressTitle1: PropTypes.string,
    progressValue1: PropTypes.string,
    progressTitle2: PropTypes.string,
    progressValue2: PropTypes.string,
    progressTitle3: PropTypes.string,
    progressValue3: PropTypes.string,
    progressTitle4: PropTypes.string,
    progressValue4: PropTypes.string,

    item2topTitle: PropTypes.string,
    item2topTitlespan: PropTypes.string,
    item2Title: PropTypes.string,
    item2Titlespan: PropTypes.string,
    item2ContentTop: PropTypes.string,
    item2ContentMiddle: PropTypes.string,
    item2ContentBottom: PropTypes.string,

    item3TopTitle: PropTypes.string,
    item3TopTitleSpan: PropTypes.string,
    item3Title: PropTypes.string,
    item3TitleSpan: PropTypes.string,
    item3Content: PropTypes.string,
    logo1: PropTypes.string,
    logo2: PropTypes.string,
    logo3: PropTypes.string,
    logo4: PropTypes.string,
    logo5: PropTypes.string,
    logo6: PropTypes.string,
    log1Title: PropTypes.string,
    log2Title: PropTypes.string,
    log3Title: PropTypes.string,
    log4Title: PropTypes.string,
    log5Title: PropTypes.string,
    log6Title: PropTypes.string,


}
About.defaultProps ={
    sectionImage: require("../../src/assets/img/about-img.png"),

    animationImg1: require("../../src/assets/img/3.png"),
    animationImg2: require("../../src/assets/img/4.png"),
    animationImg3: require("../../src/assets/img/1.png"),
    animationImg4: require("../../src/assets/img/6.png"),

    
    skillToptitle: "About",
    skillToptitlespan: "threesixty",
    skillTitle: "We Are Knowledge",
    skillTitlespan: "Compliance & Business",
    skillContent: "Our range of pro-active services include business risk assessments, training seminars, helpdesk support and threesixty online. In addition we provide technical support, product and fund research, discretionary management support, events and much more.",
    progressTitle1: "Information Management",
    progressValue1: "60%",
    progressTitle2: "Risk Assessments",
    progressValue2: "20%",
    progressTitle3: "Training Seminars",
    progressValue3: "10%",
    progressTitle4: "Helpdesk Support",
    progressValue4: "10%",
   
    item2topTitle: "Our",
    item2topTitlespan: "Mission",
    item2Title: "We Are Knowledge",
    item2Titlespan: "Finance & Compliance",
    item2ContentTop: "To help navigate IFA's and other business specialists through murky compliance waters.",
    item2ContentMiddle: "We have helped 1000s of organisations large and small with compliance and regulation changes and research.",
    item2ContentBottom: "Our range of pro-active services include business risk assessments, training seminars, helpdesk support and threesixty online. In addition we provide technical support, product and fund research, discretionary management support, events and much more.",

   
    item3TopTitle: "Why Choose",
    item3TopTitleSpan: "Us",
    item3Title: "We Are Knowledge",
    item3TitleSpan: "Compliance & Business",
    item3Content: "With over 15 years of experience and a large team of qualified professionals you can rest assured you are in safe hands.",
    logo1: "icofont-brainstorming",
    log1Title: "Superb Knowledge",
    logo2: "icofont-certificate-alt-1",
    log2Title: "Highly Qualified",
    logo3: "icofont-live-support",
    log3Title: "Friendly Support",
    logo4: "icofont-dashboard-web",
    log4Title: "Online Portal",
    logo5: "icofont-people",
    log5Title: "Expert team",
    logo6: "icofont-learn",
    log6Title: "Training Seminars",

}
export default About;
