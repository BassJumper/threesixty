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
                        <span style={{ marginLeft: "15px", fontWeight: "bold" }}>{item.date}</span>
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
    description: "Vivamus id pharetra ligula. Nullam gravida euismod nibh nec commodo. Donec tincidunt odio in neque iaculis porta.",
    items:[
        {
            imglink: "/article",
            image: require("../assets/img/article-image1.jpg"),
            titlelink: "#",
            title: "Our team outing to Alton Towers",
            date: "24 September 2021",
            content: "Nam aliquet imperdiet tellus vel elementum. Fusce fermentum tellus malesuada augue ultricies pharetra. Aliquam non mi sapien. Vestibulum at venenatis nisl. Vivamus non urna scelerisque, aliquam velit tincidunt...",
            btnlink: "#",
            btnname: "Read more",
        },
        {
            imglink: "/article",
            image: require("../assets/img/article-image2.jpg"),
            titlelink: "#",
            title: "Richard Branson visits threesixty",
            date: "22 September 2021",
            content: "Ut velit felis, imperdiet at sodales sit amet, vehicula vel arcu. Suspendisse nec elit lacinia, volutpat diam non, gravida lectus. Vivamus semper scelerisque magna, et scelerisque dui ullamcorper at. Cras vitae ornare quam...",
            btnlink: "#",
            btnname: "Read more",
        },
        {
            imglink: "/article",
            image: require("../assets/img/article-image3.jpg"),
            titlelink: "#",
            title: "Our guide to regulatory paradise",
            date: "19 September 2021",
            content: "Quisque sagittis sapien ut fermentum imperdiet. Cras sagittis tortor ut tincidunt laoreet. Mauris vel fringilla mi. Vestibulum consectetur laoreet purus, id mollis elit faucibus quis. Aliquam non mi sapien...",
            btnlink: "#",
            btnname: "Read more",
        }
    ]
}
export default NewsCarousel
