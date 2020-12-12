import React from 'react'
import MessageField from './MessageField'
import MessageCard from './MessageCard'
import ColourChoicePanel from './ColourChoicePanel'
import {Heading} from './Styled'

const App = () => {
	/*  Part 1: Implement state in the application with the useState hook
	//  Objective 1 : Make the message typed into MessageField appear in MessageCard
	//             with the MessageCard text colour and background colours
	//             set to the values currently selected in the ColourChoicePanel
	//
	//  1. Right now the message, text colour, and background(card) colour are 
	//     managed as local variables. Add state to manage them properly.
	//  2. Implement controlled components in MessageField and ColourChoicePanel
	//     that update the state values
	//  3. Pass the state values and state value modifying functions to 
	//     components as needed to complete the objective
	*/
	const message = 'Hi there!'
	const textColour = 'black'
	const cardColour = 'white'

	/* Part 2: Implement an effect to display a joke on component load
	// 
	// Call useEffect to fetch a joke and update the message when the App
	// component mounts. Make sure it only runs on component mount, and not
	// on component update.
	*/
  return (
    <div>
		<Heading>Colour Tester</Heading>
		<MessageField />
		<MessageCard message={message} textColour={textColour} cardColour={cardColour}/>
		<ColourChoicePanel />
    </div>
  )
}

export default App
