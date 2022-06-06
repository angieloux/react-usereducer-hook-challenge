import React from 'react';
import {Button, CenteredRow, TextField, Label} from './Styled'
import {getJoke} from './utils/Services'

const MessageField = (props) => {
	const {message, setMessage} = props

	function changeHandler(e) {
		setMessage(e.target.value)
	}
	
	function handleClick(event) {
		event.preventDefault()
		getJoke(setMessage)
		
	}
	return (
		<CenteredRow>
			<Button onClick={handleClick}>Surprise me</Button>
			<Label>Message:</Label>	
			<TextField data-testid='message-field' value={message} onChange={changeHandler} />
		</CenteredRow>
	);
}

export default MessageField;
