import React from 'react';
import {Button, CenteredRow, TextField, Label} from './Styled'
import {getJoke} from './utils/Services'

const MessageField = () => {
	/* Part 1, Objective 2
	// Make the button click set the message displayed to a random dad joke
	//
	// The fetch operation is implemented for you in getJoke. 
	// Look at that function in utils/Services.js and make sure you understand it.
	// Notice that it takes an optional callback function as an argument and
	// if it is provided, that callback function will be called with the joke value.
	//
	// Before you start this part of the challenge, make sure the code
	// is currently working. Verify that when you click the button, you see
	// the joke logged to the console.
	// 
	// To complete this part of the challenge, refactor the handleClick
	// function so that it updates the message in state when the button is clicked.
	// One way to do this is to pass a callback function to getJoke that will
	// update the message in state.
	// 
	// If you like, you can implement your solution another way, 
	// as long as clicking the button updates the message displayed.
	*/
	function handleClick(event) {
		event.preventDefault()
		getJoke()
	}
	return (
		<CenteredRow>
			<Button onClick={handleClick}>Surprise me</Button>
			<Label>Message:</Label>	
			<TextField data-testid='message-field' />
		</CenteredRow>
	);
}

export default MessageField;
