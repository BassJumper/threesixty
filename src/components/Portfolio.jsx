import React, { Component } from "react";
import PropTypes from "prop-types";
import PopupImage from "./PopupPortfolio";

export class Portfolio extends Component {
    render() {
        return (
            <>
                <section id="portfolio" className="portfolio-area ptb-100 bg-f9f9f9">
                    <div className="container">
                        <div className="section-title">
                            <h2>
                                {this.props.sectionTitle} <b>{this.props.sectionTitleSpan}</b>
                            </h2>
                            <p>{this.props.sectionContent}</p>
                        </div>

                        <div className="row">
                            <PopupImage />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

Portfolio.propTypes = {
    sectionTitle: PropTypes.string,
    sectionTitleSpan: PropTypes.string,
    sectionContent: PropTypes.string
};

Portfolio.defaultProps = {
    sectionTitle: "Our",
    sectionTitleSpan: "Clients",
    sectionContent:
        "Here are just a handful of our current clients and this will probably be something else but you get the idea."
};

export default Portfolio;
