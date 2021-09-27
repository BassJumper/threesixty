import React, { Component } from "react";
import PropTypes from "prop-types";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <>
        <div id="page">
          <div className="subpage-container">
            <div className="sub-banner item-bg-two">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="sub-banner-content">
                        <h1 className={"animated fadeInUp slow opacityOne"}>
                            <span>{this.props.title}</span>{" "}
                        </h1>
                        <p className={"animated zoomIn Slow opacityOne"} >
                            {this.props.description}
                        </p>
                        {
                            this.props.ctaUrl && this.props.ctaText && (
                                <a href={this.props.ctaUrl} className={"btn btn-hero animated fadeInDown slow opacityOne"}>
                                    {this.props.ctaText}
                                </a>
                            )
                        }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Banner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    ctaText: PropTypes.string,
    ctaUrl: PropTypes.string
};

Banner.defaultProps = {
    title: "How art can lift our dampened spirits",
    description: "It's been long understand that music, dancing and art in general provides us with some necessary distraction and elation from the sometimes relentless grind of day to day life. This is an important part of being human which we do not want to lose. Because - we love it!",
    ctaText: "Get in touch now",
    ctaUrl: "/contactus"
};

export default Banner;
