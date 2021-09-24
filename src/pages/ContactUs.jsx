import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import ScrollUpBtn from "../components/ScrollUpBtn";

class DummyPage extends Component {

    render() {
        return (
            <>
                <NavBar />
                <Banner 
                    title={"Contact us"} 
                    description={"Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Nascetur ridiculus mus mauris vitae ultricies leo. Egestas integer eget aliquet nibh praesent tristique magna. Odio eu feugiat pretium nibh. Tincidunt dui ut ornare lectus sit amet est. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Elit pellentesque habitant morbi tristique senectus et netus et."} 
                    ctaUrl={null}
                    ctaText={null}
                />
                <ContactUs />
                <Footer />
                <ScrollUpBtn />
            </>
        );
    }

}

export default DummyPage;


