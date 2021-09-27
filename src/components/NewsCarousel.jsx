import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NewsCarousel extends Component {
    render() {

        // const items = this.props.items.map((item, index ) =>(
        //     <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
        //         <div className="single-blog-post">
        //             <div className="post-thumbnail">
        //                 <a href={item.imglink}><img src={item.image} alt="blog-img" /></a>
        //             </div>
        //             <div className="post-content">
        //                 <h3><a href={item.titlelink}>{item.title}</a></h3>
        //                 <a href={item.btnlink} className="read-more">{item.content}</a>
        //             </div>
        //         </div>
        //     </div>
        // ));

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
                                        <img src={require('../assets/img/artist.jpg')} />
                                    </div>
                                    <h5>How art can lift our dampened spirits</h5>
                                    <p>24 September 2021</p>
                                </a>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <a href="/article">
                                    <div className='post-thumbnail'>
                                        <img src={require("../assets/img/another3.jpg")}></img>
                                    </div>
                                    <h5>Richard Branson visits threesixty</h5>
                                    <p>22 September 2021</p>
                                </a>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <a href="/article">
                                    <div className='post-thumbnail'>
                                        <img src={require("../assets/img/ecar.png")}></img>
                                    </div>
                                    <h5>E-Cars no longer a thing of the future</h5>
                                    <p>19 September 2021</p>
                                </a>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <a href="/article">
                                    <div className='post-thumbnail'>
                                        <img src={require("../assets/img/another4.jpg")}></img>
                                    </div>
                                    <h5>Our annual staff trip to Florence, Italy</h5>
                                    <p>14 September 2021</p>
                                </a>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <a href="/article">
                                    <div className='post-thumbnail'>
                                        <img src={require("../assets/img/salad.jpg")}></img>
                                    </div>
                                    <h5>Working lunches got a lot more spicy</h5>
                                    <p>12 September 2021</p>
                                </a>
                            </div>
                            <div className="article col-lg-4 col-md-12 col-sm-12">
                                <a href="/article">
                                    <div className='post-thumbnail'>
                                        <img src={require("../assets/img/wfh.jpg")}></img>
                                    </div>
                                    <h5>Our five star working from guide</h5>
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
NewsCarousel.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,

}
NewsCarousel.defaultProps = {
    title: "Already a threesixty client?",
    description: "Here are a handful of our most recent articles which of course are completely made up for demo purposes",
    items:[
        {
            imglink: "/blogpostdemo",
            image: require("../assets/img/another2.jpg"),
            titlelink: "#",
            title: "Corporate Giants Luftwanga now introduce new GDPR EU Regulations circa 2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            btnlink: "#",
            btnname: "Read more",
        },
        {
            imglink: "/blogpostdemo",
            image: require("../assets/img/artist.jpg"),
            titlelink: "#",
            title: "Many are returning to Offices but is this the right move?  We delve into this more.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            btnlink: "#",
            btnname: "Read more",
        },
        {
            imglink: "/blogpostdemo",
            image: require("../assets/img/another3.jpg"),
            titlelink: "#",
            title: "Home offices are getting a face lift thanks to threesixty services enterprising new approach.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            btnlink: "#",
            btnname: "Read more",
        }
    ]
}
export default NewsCarousel
