import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";

class LinksGrid extends Component {

    //TODO: [TECH-DEBT] - Adopt the styling pattern from Portal where the corresponding sass lives with the component file in that folder
    //TODO: [TECH-DEBT] - Introduce unit testing at this level as well as per the portal 

    render() {
        const items = this.props.items.map((item, index) =>( 
            <div className="col-lg-5 col-md-4 col-sm-12" key={index}>
                <a href={item.url}>
                    <div className="single-box">
                        <Icofont icon={item.icon} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </a>
            </div>
        ));

        return (
            <>
              <section id="about" className="welcome-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2><b>{this.props.title}</b></h2>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="row justify-content-center gap">
                            {items}
                        </div>
                    </div>
                </section>   
            </>
        );
    }

}

LinksGrid.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array
};

LinksGrid.defaultProps = {
    title: "Welcome to threesixty",
    description: "Our highly qualified and experienced team are ready to help you navigate through murky waters.",
        items: [
        {
            icon: "icofont-rocket-alt-2",
            title: "New start businesses",
            imageUrl: "",
            url: "/existingclient",
            description:
                "threesixty delivers support and personalised solutions to over 900 directly regulated IFA practices, including one hundred plus discretionary mgmt firms (more than 9,000 registered)."
        },
        {
            icon: "icofont-vehicle-delivery-van",
            title: "Moving from a network",
            imageUrl: "",
            url: "/existingclient",
            description:
                "With a focus on investment orientated businesses, clients range from substantial national and regional sized firms to niche boutique investment managers and financial planners."
        },
        {
            icon: "icofont-id",
            title: "Directly authorised",
            imageUrl: "",
            url: "/existingclient",
            description:
                "Through our in-house training and development, we make sure our staff have the appropriate knowledge, experience or qualifications relevant to their roles and the areas for clients."
        },
        {
            icon: "icofont-business-man-alt-2",
            title: "Discretionary managers",
            imageUrl: "",
            url: "/existingclient",
            description:
                "With a focus on investment orientated businesses, clients range from substantial national and regional sized firms to niche boutique investment managers and financial planners."
        }
    ]
};

export default LinksGrid;
