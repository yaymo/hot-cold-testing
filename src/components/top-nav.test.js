import React from 'react'
import {shallow, mount} from 'enzyme'
import TopNav from './top-nav'

describe('<TopNav />', () => {
	it('renders', () => {
		shallow(<TopNav />);
	});

	it('shows more info on click', () => {
		const callback = jest.fn();

		const wrapper = shallow(<TopNav onInfo={callback} />);
		wrapper.find('.what').simulate('click', {
			preventDefault() {}
		});
		expect(callback).toHaveBeenCalled();
	});

	it('starts a new game on click', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onNewGame={callback} />);
		wrapper.find('.new').simulate('click', {
			preventDefault() {}
		});
		expect(callback).toHaveBeenCalled();
	});
});