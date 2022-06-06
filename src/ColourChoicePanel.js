import React from 'react';
import {CenteredRow, Label} from './Styled'

const ColourChoicePanel = (props) => {
	/* Part 1, Objective 1
	//
	// Make the inputs controlled components
	//
	// The colours picked by the user in this component
	//	should be used to update the display in MessageCard 
	*/

	const {setCardColour, setTextColour, cardColour, textColour} = props

	function changeHandler(e) {
		e.target.name === 'text-colour' ? setTextColour(e.target.value) : setCardColour(e.target.value)
	}


	return (
		<CenteredRow>
			<Label>Text colour:</Label>	
			<input name='text-colour'
				data-testid='text-colour'
				type='color'
				value={textColour}
				onChange={changeHandler}	
			/>
			<Label>Card colour:</Label>	
			<input name='card-colour'
				data-testid='card-colour'
				type='color'
				value={cardColour}
				onChange={changeHandler}	
			/>
		</CenteredRow>
			
	);
}

export default ColourChoicePanel;
