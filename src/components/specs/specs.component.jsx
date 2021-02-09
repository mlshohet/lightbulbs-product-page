import React from 'react';
import { connect } from 'react-redux';

import { toggleSpecsHidden } from '../../redux/specs/specs.actions';

import './specs.styles.scss';

const Specs = ({ lightbulb, toggleSpecsHidden }) => {
	console.log("Item from spec: ", lightbulb);
	
	const {
		brand,
		weight,
		dimensions,
		modelNum,
		partNum,
		numOfItems,
		color,
		shape,
		finish,
		voltage,
	} = lightbulb.specs;
	return	(
			<div className="container-absolute">
				<div className="specs-container">
					<div className="title">
						Specifications
					</div>
					<div className="specs">
						<div className="spec">
							<div className="spec-name">
								Brand
							</div>
							<div className="spec-desc">
								{ brand }
							</div>
						</div>
						<hr></hr>
						<div className="spec">
							<div className="spec-name">
								Item Weight
							</div>
							<div className="spec-desc">
								{ weight }
							</div>
						</div>
						<hr></hr>
						<div className="spec">
							<div className="spec-name">
								Dimensions
							</div>
							<div className="spec-desc">
								{ dimensions }
							</div>
						</div>
						<hr></hr>
						<div className="spec">
							<div className="spec-name">
								Model #
							</div>
							<div className="spec-desc">
								{ modelNum }
							</div>
						</div>
						<hr></hr>
						<div className="spec">
							<div className="spec-name">
								Part #
							</div>
							<div className="spec-desc">
								{ partNum }
							</div>
						</div>
						<hr></hr>
						<div className="spec">
							<div className="spec-name">
								Amount
							</div>
							<div className="spec-desc">
								{ numOfItems }
							</div>
						</div>
						<hr></hr>
						<div className="spec">
							<div className="spec-name">
								Color
							</div>
							<div className="spec-desc">
								{ color }
							</div>
						</div>
						<hr></hr>
						<div className="spec">
							<div className="spec-name">
								Shape
							</div>
							<div className="spec-desc">
								{ shape }
							</div>
						</div>
						<hr></hr>
						<div className="spec">
							<div className="spec-name">
								Finish
							</div>
							<div className="spec-desc">
								{ finish }
							</div>
						</div>
						<hr></hr>
						<div className="spec">
							<div className="spec-name">
								Voltage
							</div>
							<div className="spec-desc">
								{ voltage }
							</div>
						</div>
						<hr></hr>
						<div className="hide-container">
							<div className="hide-specs" onClick={toggleSpecsHidden}>
								HIDE DETAILS
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

const mapStateToProps = ({ item: { lightbulb }}) => ({
	lightbulb
});

const mapDispatchToProps = dispatch => ({
	toggleSpecsHidden: () => dispatch(toggleSpecsHidden())
});

	
export default connect(mapStateToProps, mapDispatchToProps)(Specs);



