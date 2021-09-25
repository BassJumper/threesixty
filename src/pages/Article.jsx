import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import TwoColumnContent from "../components/TwoColumnContent";
import ScrollUpBtn from "../components/ScrollUpBtn";

class DummyPage extends Component {

    render() {
        return (
            <>
                <NavBar />
                <Banner />
                <TwoColumnContent /> 
                <Footer />
                <ScrollUpBtn />
            </>
        );
    }

}

export default DummyPage;


