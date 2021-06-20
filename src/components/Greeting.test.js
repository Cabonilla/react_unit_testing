import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {

	test('renders Hello Laverne as a text', () => {
		//Arrange
		render(<Greeting />);

		//Act
		// ...nothing

		//Assert
		const helloWorldElement = screen.getByText('Hello Laverne')
		expect(helloWorldElement).toBeInTheDocument()
	})

	test('renders How are you as a text', () => {
		render(<Greeting/>)

		const howAreYouElement = screen.getByText('How are you', {exact: false})
		expect(howAreYouElement).toBeInTheDocument()
	})
	test('renders I\'m fine laverne if the button was clicked', () => {
		//Arrange
		render(<Greeting/>)

		//Act(ion)
		const buttonElement = screen.getByRole('button')
		userEvent.click(buttonElement)

		//Assert
		const imFineElement = screen.getByText('I\'m fine Laverne', {exact: false})
		expect(imFineElement).toBeInTheDocument()
	})

	test('does not render "How are you?" if the button was clicked', () => {
		//Arrange
		render(<Greeting/>)

		//Act(ion)
		const buttonElement = screen.getByRole('button')
		userEvent.click(buttonElement)

		//Assert
		const imFineElement = screen.queryByText('How are you?', {exact: false})
		expect(imFineElement).toBeNull();
	})
})
