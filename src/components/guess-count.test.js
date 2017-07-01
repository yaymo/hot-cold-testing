import React from 'react'
import {shallow, mount} from 'enzyme'
import GuessCount from './guess-count'

describe('<GuessCount />', () => {
	it('should render', () => {
		shallow(<GuessCount />);
	});

	it('should render count', () => {
		const count = 3;
		const wrapper = shallow(<GuessCount count={count} />);
		expect(wrapper.text()).toEqual(`Guess #${count}!`);
	});
});