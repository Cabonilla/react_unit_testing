import { useState } from 'react';

const Greeting = ( ) => {
	const [changedText, setChangedText] = useState(false);

	const changeTextHandler = () => {
		setChangedText(true);
	}

	return (
	<div>
		<h2>Hello Laverne</h2>
		{!changedText && <p>How are you?</p>  }
		{/* <p>How are you?</p> */}
		{changedText && <p>I'm fine Laverne.</p>}
		<button onClick={changeTextHandler}>Change Text!</button>
	</div>
	)
}

export default Greeting