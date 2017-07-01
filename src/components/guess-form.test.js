import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessForm from './guess-form'

describe('<GuessForm />', () => {
	it('renders', () => {
		shallow(<GuessForm />);
	});

	it('should fire onSubmit callback when guessing', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onGuess={callback} />);
		const value = 6;
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalledWith(value.toString());
	});

	it('should clear the form after submit', () => {
		const wrapper = mount(<GuessForm />);
		const input = wrapper.find('input[type="text"]');
		input.node.value = 10;
		wrapper.simulate('submit');
		expect(input.node.value).toEqual('');
	})
})