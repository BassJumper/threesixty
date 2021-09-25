import React, { Component } from "react";
import PropTypes from "prop-types";

export class InfoBar extends Component {
	render() {
		const items = this.props.items.map((features, index) => (
			<div className="single-features col-lg-4 col-md-12 col-sm-12"  key={index}>
				<div className="icon">
				<i className={features.icon} />
				</div>
				<h3>{features.title}</h3>
				<p>{features.content}</p>
			</div>
		));

		return (
			<>
				<section className={`features-area ptb-100 ${this.props.modClass}`}>
					<div className="container">
						<div className="row">
							{items}
						</div>
					</div>

					<div className="animation-box1">
						<img src={require("../../src/assets/img/3.png")} alt="animateimage" />
					</div>

					<div className="animation-box2">
						<img src={require("../../src/assets/img/4.png")} alt="animateimage" />
					</div>

					<div className="animation-box3">
						<img src={require("../../src/assets/img/1.png")} alt="animateimage" />
					</div>
				</section>
			</>
		);
  	}
}

InfoBar.propTypes = {
	modClass: PropTypes.string,
	featuresImage: PropTypes.string,
	items: PropTypes.array
};

InfoBar.defaultProps = {
	modClass: "",
	items: [
		{
			icon: "icofont-check-circled",
			title: "Highly qualified",
			content:
				"threesixty delivers support and personalised solutions to over 900 directly regulated IFA practices, including over 100 discretionary management firms (more than 9,000 registered individuals)."
			},
		{
			icon: "icofont-check-circled",
			title: "Extensive experience",
			content:
				"With a focus on investment orientated businesses, clients range from substantial national and regional sized firms to niche boutique investment managers and financial planners."
			},
		{
			icon: "icofont-check-circled",
			title: "Trusted & proven",
			content:
				"Through our in-house training and development, we make sure our staff have the appropriate knowledge, experience or qualifications relevant to their roles and the areas assisting our clients."
		}
	]
};
export default InfoBar;
