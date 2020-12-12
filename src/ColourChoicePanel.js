import React from 'react';
import {CenteredRow, Label} from './Styled'

const ColourChoicePanel = () => {
	/* Part 1, Objective 1
	//
	// Make the inputs controlled components
	//
	// The colours picked by the user in this component
	//	should be used to update the display in MessageCard 
	*/
	return (
		<CenteredRow>
			<Label>Text colour:</Label>	
			<input name='text-colour'
				data-testid='text-colour'
				type='color'	
			/>
			<Label>Card colour:</Label>	
			<input name='card-colour'
				data-testid='card-colour'
				type='color'	
			/>
		</CenteredRow>
			
	);
}

export default ColourChoicePanel;
