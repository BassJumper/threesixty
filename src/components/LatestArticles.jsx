import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class LatestArticles extends Component {
    render() {

        // TODO: Make into proper LatestArticles component again after demo
        return (
            <>
                <section id="blog" className="blog-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2><b>{this.props.title}</b></h2>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <a href="/article">
                                    <div className='post-thumbnail'>
                                        <img src={require('../assets/img/article-image1.jpg')} />
                                    </div>
                                    <h5>Our team outing to Alton Towers</h5>
                                    <p>24 September 2021</p>
                                </a>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <a href="/article">
                                    <div className='post-thumbnail'>
                                        <img src={require("../assets/img/article-image2.jpg")}></img>
                                    </div>
                                    <h5>Richard Branson visits threesixty</h5>
                                    <p>22 September 2021</p>
                                </a>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <a href="/article">
                                    <div className='post-thumbnail'>
                                        <img src={require("../assets/img/article-image3.jpg")}></img>
                                    </div>
                                    <h5>Our guide to regulatory paradise</h5>
                                    <p>19 September 2021</p>
                                </a>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <a href="/article">
                                    <div className='post-thumbnail'>
                                        <img src={require("../assets/img/article-image5.jpg")}></img>
                                    </div>
                                    <h5>Our expert working from home guide</h5>
                                    <p>14 September 2021</p>
                                </a>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <a href="/article">
                                    <div className='post-thumbnail'>
                                        <img src={require("../assets/img/article-image4.jpg")}></img>
                                    </div>
                                    <h5>Our Escape Room day, did we make it?</h5>
                                    <p>12 September 2021</p>
                                </a>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <a href="/article">
                                    <div className='post-thumbnail'>
                                        <img src={require("../assets/img/article-image6.jpg")}></img>
                                    </div>
                                    <h5>How to spice up working lunches</h5>
                                    <p>29 August 2021</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
LatestArticles.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,

}
LatestArticles.defaultProps = {
    title: "Already a threesixty client?",
    description: "Here are a handful of our most recent articles which of course are completely made up for demo purposes",
    items:[
        {
            imglink: "/blogpostdemo",
            image: require("../assets/img/article-image1.jpg"),
            titlelink: "#",
            title: "Corporate Giants Luftwanga now introduce new GDPR EU Regulations circa 2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            btnlink: "#",
            btnname: "Read more",
        },
        {
            imglink: "/blogpostdemo",
            image: require("../assets/img/article-image1.jpg"),
            titlelink: "#",
            title: "Many are returning to Offices but is this the right move?  We delve into this more.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            btnlink: "#",
            btnname: "Read more",
        },
        {
            imglink: "/blogpostdemo",
            image: require("../assets/img/article-image3.jpg"),
            titlelink: "#",
            title: "Home offices are getting a face lift thanks to threesixty services enterprising new approach.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            btnlink: "#",
            btnname: "Read more",
        }
    ]
}
export default LatestArticles
