import React from 'react';
import {CenteredRow, Card} from './Styled'

const MessageCard = (props) => {
	/* Part 1, Objective 1
	// You are given a bit of guidance here - the text and 
	// colours are already being received as props.
	// 
	// Since the state values are only used for display in this component,
	// you don't have to make any changes here. Your changes will be in
	// the other components. 
	// 
	// The Card component is a styled component that takes the colour
	// choices as props (bgcolour and colour)
	*/
	const {message, textColour, cardColour} = props
	return (
		<CenteredRow>
			<Card data-testid='message-card' bgColour={cardColour} colour={textColour}>
				{message}
			</Card>	
		</CenteredRow>
	);
}

export default MessageCard;
