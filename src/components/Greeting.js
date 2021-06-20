import { useState } from 'react';
import Async from './Async';
import Output from './Output';

const Greeting = () => {
	const [changedText, setChangedText] = useState(false);

	const changeTextHandler = () => {
		setChangedText(true);
	}

	return (
		<div>
			<h2>Hello Laverne</h2>
			{!changedText && <Output>How are you?</Output>}
			{/* <p>How are you?</p> */}
			{changedText && <Output>I'm fine Laverne.</Output>}
			<button onClick={changeTextHandler}>Change Text!</button>
			<Async/>
		</div>
	)
}

export default Greeting