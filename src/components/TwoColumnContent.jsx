import React, { Component } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

export class TwoColumnContent extends Component {
	render() {

		return (
			<>
				<section className="two-column-cta ptb-100">
					<div className="container">
						<div className="row">
							{this.props.alignCTALeft ? (<>
									<div className="col-lg-4 col-md-12 col-sm-12 two-column-cta-block">
										{parse(this.props.columnOne)}
									</div>
									<div className="two-column-content col-lg-8 col-md-12 col-sm-12">
										<h3>{this.props.title}</h3>
										{parse(this.props.columnTwo)}
									</div>
								</>
							) : (<>
								<div className="two-column-content col-lg-8 col-md-12 col-sm-12">
									<h3>{this.props.title}</h3>
									{parse(this.props.columnOne)}
								</div>
								<div className="col-lg-4 col-md-12 col-sm-12">
									{parse(this.props.columnTwo)}
								</div></>
							)}
						</div>
					</div>
				</section>
			</>
		);
  	}
}

TwoColumnContent.propTypes = {
	columnOne: PropTypes.string,
	columnTwo: PropTypes.string,
	reverseAlignment: PropTypes.bool
};

TwoColumnContent.defaultProps = {
	columnOne: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa.</p><p>Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Placerat orci nulla pellentesque dignissim enim. Sed augue lacus viverra vitae congue eu consequat ac. </p><p>Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Vestibulum lectus mauris ultrices eros. Suspendisse ultrices gravida dictum fusce ut placerat.</p>",
	columnTwo: "<h3>Latest Articles</h3><div className={'testimonial-cta-inner-block'}></div><h4>August 2021</h4><h2>Aloqu aisjdi ajsaisdjias jdiasjdi jasidjasas</h2><a href='#'>Read more</a></div><div className={'testimonial-cta-inner-block'}></div><h4>August 2021</h4><h2>Aloqu aisjdi ajsaisdjias jdiasjdi jasidjasas</h2><a href='#'>Read more</a></div>",
	reverseAlignment: false
};

export default TwoColumnContent;
