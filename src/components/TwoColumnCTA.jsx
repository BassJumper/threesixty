import React, { Component } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import Link from "react-router-bootstrap"

export class TwoColumnCTA extends Component {
	render() {

		return (
			<>
				<section className="two-column-cta ptb-100">
					<div className="container">
						<div className="row">
							{this.props.alignCTALeft ? (<>
									<div className="col-lg-4 col-md-12 col-sm-12 two-column-cta-block">
										{this.props.ctaImage && this.props.ctaImage.length > 0 && (
											<img className="two-column-cta-image" src={require(`../../src/assets/img/${this.props.ctaImage}`)} alt="ctaimage" />
										)}
										<div className={"two-column-cta-inner-block"}>
											<h3>{this.props.ctaTitle}</h3>
											<div>
												{parse(this.props.ctaContent)}
											</div>
											<a className="btn btn-primary" href={this.props.ctaUrl} type="button">
												{this.props.ctaText}
											</a>
										</div>
									</div>
									<div className="two-column-content col-lg-8 col-md-12 col-sm-12">
										<h3>{this.props.title}</h3>
										{parse(this.props.content)}
									</div>
								</>
							) : (<>
								<div className="two-column-content col-lg-8 col-md-12 col-sm-12">
									<h3>{this.props.title}</h3>
									{parse(this.props.content)}
								</div>
								<div className={"testimonial-cta-inner-block"}>
									<h3>{this.props.ctaTitle}</h3>
									<div>
										{parse(this.props.ctaContent)}
									</div>
									<Link to={`${this.props.ctaUrl}`}><button className="btn btn-primary">{this.props.ctaText}</button></Link>
								</div></>
							)}
						</div>
					</div>
				</section>
			</>
		);
  	}
}

TwoColumnCTA.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	ctaTitle: PropTypes.string,
	ctaImage: PropTypes.string,
	ctaContent: PropTypes.string,
	ctaLink: PropTypes.string,
	ctaUrl: PropTypes.string,
	alignCTALeft: PropTypes.bool
};

TwoColumnCTA.defaultProps = {
	title: "Lorem ipsium dolor sit amet, constutuero adispging elit nam sit.",
	content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa.</p><p>Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Placerat orci nulla pellentesque dignissim enim. Sed augue lacus viverra vitae congue eu consequat ac. </p><p>Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Vestibulum lectus mauris ultrices eros. Suspendisse ultrices gravida dictum fusce ut placerat.</p>",
	ctaTitle: "Consecuterot adisping elit anm sit.",
	ctaImage: null,
	ctaContent: "<p>Sed utlerics edor facuibus risi malesuad consuectoreur</p><h4><b style='font-size: 40px; color: #040041;'>£150</b> per month</h4>",
	ctaLink: "#",
	ctaText: "Our services",
	alignCTALeft: false
};

export default TwoColumnCTA;
