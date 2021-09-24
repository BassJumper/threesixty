import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ScrollUpBtn from "../components/ScrollUpBtn";
import TestimonialCTA from '../components/TestimonialCTA';

class WhyChooseUs extends Component {

    render() {
        return (
            <>
                <NavBar />

                <Banner 
                    title={"Why choose us?"} 
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean egestas odio eu hendrerit interdum. Ut aliquam sit amet metus sit amet ornare. Vivamus pulvinar ut mi non egestas."} 
                />

                <TestimonialCTA 
	                testimonialImage={"team-img4.jpg"}
                    testimonialTitle={"Claudia Clay"}
                    testimonialQuote={"We have worked with threesixty for over 5 years and value their partnership as an extension of our own business."}
                    testimonialSubTitle={"Risk and Regulatory Director, The Private Office Ltd"}
                    ctaTitle="Consecuterot adisping elit anm sit."
                    ctaContent="<p>Sed ultrices eros faucibus risus malesuada consectetur. Cras quis tincidunt elit. Mauris nec porta neque. Quisque in mi et quam elementum efficitur.</p><p>Aenean egestas odio eu hendrerit interdum. Ut aliquam sit amet metus sit amet ornare. Vivamus pulvinar ut mi non egestas. Morbi semper imperdiet aliquet. Integer venenatis tellus placerat neque cursus, et porttitor leo tempus.</p>"
	                ctaUrl="/whoweworkwith"
	                ctaText="Who we work with"
                /> 

                <TestimonialCTA 
	                testimonialImage={"team-img3.jpg"}
                    testimonialTitle={"Steven Hall MSc, FPFS"}
                    testimonialQuote={"threesixty take the time to truly understand our business and the diection we want to take it."}
                    testimonialSubTitle={"Founding Director, Chartered Wealth Management Ltd"}
                    ctaTitle="Vivamus sodales velit tellus"
                    ctaContent="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor mauris vel aliquam auctor. Donec quis ipsum auctor, lobortis nunc vel, molestie leo. Suspendisse non mi a ligula efficitur molestie quis id arcu.</p><p>Sed aliquam lobortis nisi eu vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum fringilla, quam ac ultrices rhoncus, sapien mi malesuada nisi, et posuere mauris.</p>"
	                ctaUrl="/ourservices"
	                ctaText="Our services"
                    alignCTALeft={true}
                /> 

                <TestimonialCTA 
	                testimonialImage={"team-img2.jpg"}
                    testimonialTitle={"Dawn Scott"}
                    testimonialQuote={"threesixty came highly recommended. We agreed a contract to cover annual business risk visits and never looked back."}
                    testimonialSubTitle={"Director, Cowgills Wealth Ltd"}
                    ctaTitle="Consecuterot adisping elit anm sit."
                    ctaContent="<p>Sed ultrices eros faucibus risus malesuada consectetur. Cras quis tincidunt elit. Mauris nec porta neque. Quisque in mi et quam elementum efficitur.</p><p>Aenean egestas odio eu hendrerit interdum. Ut aliquam sit amet metus sit amet ornare. Vivamus pulvinar ut mi non egestas. Morbi semper imperdiet aliquet. Integer venenatis tellus placerat neque cursus, et porttitor leo tempus.</p>"
	                ctaUrl="/contactus"
	                ctaText="Contact us"
                /> 

                <Footer />
                <ScrollUpBtn />
            </>
        );
    }

}

export default WhyChooseUs;


