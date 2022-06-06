import React, {useState, useEffect} from 'react'
import MessageField from './MessageField'
import MessageCard from './MessageCard'
import ColourChoicePanel from './ColourChoicePanel'
import {Heading} from './Styled'
import {getJoke} from './utils/Services'

const App = () => {
	// initialise state values
	const [initialMessage, initialTextColour, initialCardColour] = ['', '#000000', '#FFFFFF']

	const [message, setMessage] = useState(initialMessage)
	const [textColour, setTextColour] = useState(initialTextColour)
	const [cardColour, setCardColour] = useState(initialCardColour)

	useEffect(() => {
		getJoke(setMessage)
	}, [])
	
	
  return (
    <div>
		<Heading>Colour Tester</Heading>
		<MessageField message={message} setMessage={setMessage} />
		<MessageCard message={message} textColour={textColour} cardColour={cardColour}/>
		<ColourChoicePanel setCardColour={setCardColour} setTextColour={setTextColour} />
    </div>
  )
}

export default App

	/*  Part 1: Implement state in the application with the useState hook
	//  Objective 1 : Make the message typed into MessageField appear in MessageCard
	//             with the MessageCard text colour and background colours
	//             set to the values currently selected in the ColourChoicePanel
	//

	//  2. Implement controlled components in MessageField and ColourChoicePanel
	//     that update the state values
	//  3. Pass the state values and state value modifying functions to 
	//     components as needed to complete the objective
	*/




	/* Part 2: Implement an effect to display a joke on component load
	// 
	// Call useEffect to fetch a joke and update the message when the App
	// component mounts. Make sure it only runs on component mount, and not
	// on component update.
	*/
