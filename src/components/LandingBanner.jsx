import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";
import { Link } from "react-scroll";

class HomeSlides extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }
    scrollWithOffset(el, offset) {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
            top: elementPosition,
            left: 0,
            behavior: "smooth"
        });
    };
    openModal() {
        this.setState({ isOpen: true });
    }
    render() {
        const homeslidesdata = this.props.homeslidesData.map(
            (homeslides, index) => (
                <div key={index}>
                    <div className={homeslides.bgImgClass}>
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="hero-content">
                                                
                                                <h1
                                                    className={
                                                        isVisible
                                                            ? "animated fadeInUp slow opacityOne"
                                                            : "opacityZero"
                                                    }>
                                                    {homeslides.mainlefttitle}{" "}
                                                    <span>
                                                        {
                                                            homeslides.mainspantitle
                                                        }
                                                    </span>{" "}
                                                    {homeslides.mainrighttitle}
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible
                                                            ? "animated zoomIn Slow opacityOne"
                                                            : "opacityZero"
                                                    }
                                                >
                                                    {homeslides.content}
                                                </p>
                                                <Link
                                                    to="about"
                                                    className ={
                                                        isVisible
                                                            ? "btn btn-hero animated fadeInDown slow opacityOne"
                                                            : " btn opacityZero"
                                                    }
                                                    onClick={() => this.scrollWithOffset("about", "-70")}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={800}>
                                                     {homeslides.leftbtn}
                                                </Link>
                                                <button onClick={this.openModal} className={
                                                        isVisible
                                                            ? "video-btn animated fadeInDown slow opacityOne"
                                                            : "video-btn opacityZero"
                                                    }>
                                                    <Icofont icon="icofont-play-alt-2" /> {homeslides.videobtn}
                                                </button>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>

                        <div className="animation-box1">
                            <img
                                src={this.props.animationImg1}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box2">
                            <img
                                src={this.props.animationImg2}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box3">
                            <img
                                src={this.props.animationImg3}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box4">
                            <img
                                src={this.props.animationImg4}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box6">
                            <img
                                src={this.props.animationImg5}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box7">
                            <img
                                src={this.props.animationImg6}
                                className="rotateme"
                                alt="sliderimage"
                            />
                        </div>
                    </div>
                </div>
            )
        );

        return (
            <>
                <div id="home">
                    <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId={this.props.homeslidesData[0].videoId}
                        onClose={() =>
                        this.setState({
                            isOpen: false
                        })
                        }
                    />

                    <OwlCarousel
                        className="home-slides owl-theme"
                        items={1}
                        nav={true}
                        dots={false}
                        loop={true}
                        touchDrag={false}
                        mouseDrag={false}
                        autoplay={true}
                        autoplayHoverPause={true}
                        animateOut={"slideOutDown"}
                        animateIn={"slideInDown"}
                        smartSpeed={700}
                        autoplayTimeout ={8000}
                        navText={[
                            "<i class='icofont-swoosh-right'></i>",
                            "<i class='icofont-swoosh-right'></i>"
                        ]}>
                        {homeslidesdata}
                    </OwlCarousel>
                </div>
            </>
        );
    }
}

HomeSlides.propTypes = {
    animationImg1: PropTypes.string,
    animationImg2: PropTypes.string,
    animationImg3: PropTypes.string,
    animationImg4: PropTypes.string,
    animationImg5: PropTypes.string,
    animationImg6: PropTypes.string,
    homeslidesData: PropTypes.array
};

HomeSlides.defaultProps = {
    animationImg1: require("../assets/img/1.png"),
    animationImg2: require("../assets/img/2.png"),
    animationImg3: require("../assets/img/1.png"),
    animationImg4: require("../assets/img/5.png"),
    animationImg5: require("../assets/img/6.png"),
    animationImg6: require("../assets/img/7.png"),

    homeslidesData: [
        {
            bgImgClass: "main-banner item-bg-three",
            toptitle: "three sixty services",
            mainlefttitle: "COMPLIANCE AND",
            mainspantitle: "BUSINESS",
            mainrighttitle: "SPECIALIST",
            content:
                "threesixty delivers support and personalised solutions to over 900 directly regulated IFA practices, including over 100 discretionary management firms – equating to more than 9,000 registered individuals",
            leftbtn: "Get to know us",
            leftbtnlink: "#",
            videobtn: "Who are we video",
            videoId: "F_HBArBxKe8",
        },
        {
            bgImgClass: "main-banner item-bg-two",
            toptitle: "three sixty services",
            mainlefttitle: "FINANCIAL AND",
            mainspantitle: "REGULATION",
            mainrighttitle: "EXPERT",
            content:
                "Our range of pro-active services include business risk assessments, training seminars, helpdesk support and threesixty online. In addition we provide technical support, product and fund research, discretionary management support, events and much more.",
            leftbtn: "Get to know us",
            leftbtnlink: "#",
            videobtn: "Who are we video",
            videoId: "F_HBArBxKe8",
        }
    ]
};

export default HomeSlides;
