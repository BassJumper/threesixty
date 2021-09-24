import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import LinksGrid from "../components/LinksGrid";
import Services from "../components/Services";
import TeamCarousel from "../components/TeamCarousel";
import InfoBar from "../components/InfoBar";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import NewsCarousel from "../components/NewsCarousel";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ScrollUpBtn from "../components/ScrollUpBtn";
import LandingBanner from '../components/LandingBanner';

class Home extends Component {
    render() {
        return (
            <>
                <NavBar />
                <LandingBanner />
                <LinksGrid />
                <InfoBar modClass="thin-strip" />
                <Services />
                <TeamCarousel />
                <TestimonialsCarousel />
                <NewsCarousel />
                <ContactUs />
                <Footer />
                <ScrollUpBtn />
            </>
        );
    }
}

export default Home;


