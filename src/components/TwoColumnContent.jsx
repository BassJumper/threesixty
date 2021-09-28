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
	columnOne: "<h3 style='margin-top: 12px;color: rgb(4, 0, 65);'>Salads for the Soul</h3><img src='/static/media/article-main-image.e196ab61.jpg' style='margin-bottom: 20px;' /><p>It's been long understand that music, dancing and art in general provides us with some necessary distraction and elation from the sometimes grind of day to day life. This is an important part of being human which we do not want to lose. Because - we love it!</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa.</p><p>Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Placerat orci nulla pellentesque dignissim enim. Sed augue lacus viverra vitae congue eu consequat ac. </p><p>Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Vestibulum lectus mauris ultrices eros. Suspendisse ultrices gravida dictum fusce ut placerat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa.</p><p>Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Placerat orci nulla pellentesque dignissim enim. Sed augue lacus viverra vitae congue eu consequat ac. </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit sed ullamcorper morbi tincidunt ornare massa.</p><p>Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Placerat orci nulla pellentesque dignissim enim. Sed augue lacus viverra vitae congue eu consequat ac. </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>",
	columnTwo: "<div><h3 style='margin-top: 20px; color: #040041;'>Latest Articles</h3><div class='article'><a href='/blog'><div class='post-thumbnail'><img src='/static/media/article-image2.0d0da6ec.jpg'></div><h5>Richard Branson visits threesixty</h5><p>22 September 2021</p></a></div><div class='article'><a href='/blog'><div class='post-thumbnail'><img src='/static/media/article-image1.daa64031.jpg'></div><h5>Our team outing to Alton Towers</h5><p>19 September 2021</p></a></div></div>",
	reverseAlignment: false
};

export default TwoColumnContent;
