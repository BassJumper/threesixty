import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NewsCarousel extends Component {
    render() {

        const items = this.props.items.map((item, index ) =>(
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="single-blog-post">
                    <div className="post-thumbnail">
                        <a href={item.imglink}><img src={item.image} alt="blog-img" /></a>
                    </div>
                    <div className="post-content">
                        <h3><a href={item.titlelink}>{item.title}</a></h3>
                        <a href={item.btnlink} className="read-more">{item.content}</a>
                    </div>
                </div>
            </div>
        ));

        return (
            <>
                <section id="blog" className="blog-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2><b>{this.props.title}</b></h2>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="row justify-content-center">
                            {items}
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
    description: "Articles from our Research Analysts and Field Experts to summarise and simplify.",
    items:[
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
    ]
}
export default NewsCarousel
