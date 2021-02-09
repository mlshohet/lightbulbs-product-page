import React from 'react';
import SuggestedItem from '../suggested-item/suggested-item.component';

import SUGGESTIONS_DATA from './suggestions-data';

import './suggestions-container.styles.scss';

class SuggestionsContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			suggestions: SUGGESTIONS_DATA,
			currentSuggestions: [
				SUGGESTIONS_DATA[0],
				SUGGESTIONS_DATA[1],
				SUGGESTIONS_DATA[2]
			],
			startCurrent: true,
			endCurrent: false,
		}
	}

	shiftItemsRight = (currentItems, itemArray) => {
		const lastIndex = currentItems[2].index;

		const newCurrents = 
			itemArray[lastIndex + 3] !== undefined ?
				itemArray.slice(lastIndex + 1, lastIndex + 4):
				currentItems;

		newCurrents[newCurrents.length-1] === itemArray[itemArray.length-1] ?
			this.setState({ endCurrent: true, currentSuggestions: newCurrents }) :
			this.setState({ 
				startCurrent: false,
				endCurrent: false,
				currentSuggestions: newCurrents
			});
	}

	shiftItemsLeft = (currentItems, itemArray) => {
		const firstIndex = currentItems[0].index;
		const newCurrents = 
			itemArray[firstIndex - 3] !== undefined ?
				itemArray.slice(firstIndex - 3, firstIndex):
				currentItems;

		newCurrents[0] === itemArray[0] ?
			this.setState({ startCurrent: true, currentSuggestions: newCurrents }) :
			this.setState({ 
				startCurrent: false,
				endCurrent: false,
				currentSuggestions: newCurrents
			});
	}

	render() {
		return (
			<div className="suggestions-container">
			
				<div className="suggestions">
					<div className="tagline">
						You may also like
					</div>
					<div className="suggested-items">
						<div 
							onClick={
								() => this.shiftItemsLeft(
									this.state.currentSuggestions,
									this.state.suggestions
								)}
							className = {`
								arrow
								${this.state.startCurrent ? 'hidden': ''}
							`}
							>&#10094;
						</div>
						{
							this.state.currentSuggestions.map(currentSuggestion => (
								<SuggestedItem
									key={currentSuggestion.index}
									title={currentSuggestion.title}
									imageUrl={currentSuggestion.imageUrl} 
									price={currentSuggestion.price}
								/>
							))
						}
						<div 
							onClick={
								() => this.shiftItemsRight(
									this.state.currentSuggestions,
									this.state.suggestions
								)}
							className = {`
								arrow
								${this.state.endCurrent ? 'hidden': ''}
							`}
							>&#10095;
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SuggestionsContainer;






