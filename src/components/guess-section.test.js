import React from 'react'
import GuessSection from './guess-section'
import GuessForm from './guess-form'
import {shallow, mount} from 'enzyme'

describe('<GuessSection />', () => {
	it('renders', () => {
		shallow(<GuessSection />);
	});

	it('gives feedback', () =>{
		const feedback = 'So close!'
		const wrapper = shallow(<GuessSection feedback={feedback} />);
		expect(wrapper.contains(feedback)).toEqual(true);
	});
});