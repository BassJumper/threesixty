import React, { Component } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { Link } from 'react-router-dom';

export class TestimonialCTA extends Component {
	render() {

		return (
			<>
				<section className="testimonial-cta ptb-100">
					<div className="container">
						<div className="row">
							{this.props.alignCTALeft ? (
								<>
									<div className="col-lg-6 col-md-12 col-sm-12 two-column-cta-block">
										{this.props.ctaImage && this.props.ctaImage.length > 0 && (
											<img className="two-column-cta-image" src={require(`../../src/assets/img/${this.props.ctaImage}`)} alt="ctaimage" />
										)}
										<div className={"testimonial-cta-inner-block"}>
											<h3>{this.props.ctaTitle}</h3>
											<div>
												{parse(this.props.ctaContent)}
											</div>
											<Link to={this.props.ctaUrl}><button className="btn btn-primary">{this.props.ctaText}</button></Link>
										</div>
									</div>
									<div className="two-column-content col-lg-6 col-md-12 col-sm-12">
										<div className="testimonial-cta-inner-content">
											<div className="testimonial-inner-content">
												<img className="testimonial-image" src={require(`../../src/assets/img/${this.props.testimonialImage}`)} alt="testimonial image" />
												<i className="icofont-quote-left testimonial-icon"></i>
												<quote className="testimonial-quote">{this.props.testimonialQuote}</quote>
											</div>
											<div>
												<h3>{this.props.testimonialTitle}</h3>
												<p>{this.props.testimonialSubTitle}</p>
											</div>
										</div>
									</div>
								</>
							) : (<>
								<div className="testimonial-cta-content col-lg-6 col-md-12 col-sm-12">
									<div className="testimonial-cta-inner-content">
										<div className="testimonial-inner-content">
											<img className="testimonial-image" src={require(`../../src/assets/img/${this.props.testimonialImage}`)} alt="testimonial image" />
											<i className="icofont-quote-left testimonial-icon"></i>
											<quote className="testimonial-quote">{this.props.testimonialQuote}</quote>
										</div>
										<div>
											<h3>{this.props.testimonialTitle}</h3>
											<p>{this.props.testimonialSubTitle}</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12 col-sm-12">
									{this.props.ctaImage && this.props.ctaImage.length > 0 && (
										<img className="two-column-cta-image" src={require(`../../src/assets/img/${this.props.ctaImage}`)} alt="ctaimage" />
									)}
									<div className={"testimonial-cta-inner-block"}>
										<h3>{this.props.ctaTitle}</h3>
										<div>
											{parse(this.props.ctaContent)}
										</div>
										<Link to={`${this.props.ctaUrl}`}><button className="btn btn-primary">{this.props.ctaText}</button></Link>
									</div>
								</div></>
							)}
						</div>
					</div>
				</section>
			</>
		);
  	}
}

TestimonialCTA.propTypes = {
	testimonialImage: PropTypes.string,
	testimonialTitle: PropTypes.string,
	testimonialQuote: PropTypes.string,
	testimonialSubTitle: PropTypes.string,
	ctaTitle: PropTypes.string,
	ctaImage: PropTypes.string,
	ctaContent: PropTypes.string,
	ctaUrl: PropTypes.string,
	alignCTALeft: PropTypes.bool
};

TestimonialCTA.defaultProps = {
	testimonialImage: "team-img4.jpg",
	testimonialTitle: "Claudia Clay",
	testimonialQuote: "We have worked with threesixty for over 5 years and value their partnership as an extension of our own business.",
	testimonialSubTitle: "Risk and Regulatory Director, The Private Office Ltd",
	ctaTitle: "Consecuterot adisping elit anm sit.",
	ctaImage: null,
	ctaContent: "<p>Sed utlerics edor facuibus risi malesuad consuectoreur</p><h4><b style='font-size: 40px; color: #040041;'>£150</b> per month</h4>",
	ctaUrl: "/ourservices",
	ctaText: "Our services",
	alignCTALeft: false
};

export default TestimonialCTA;
