import React, { Component } from 'react';
import SubNav from "../components/SubNav";
import ScrollUpBtn from "../components/ScrollUpBtn";
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';

class BlogPostDemo extends Component {
    render() {
        return(
            <>
                <SubNav />
                <BlogPost />
                <Footer />
                <ScrollUpBtn />
            </>
        );
    }
}

export default BlogPostDemo;