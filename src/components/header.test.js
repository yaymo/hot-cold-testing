import React from 'react'
import Header from './header'
import {shallow, mount} from 'enzyme'

describe('<Header />', () => {
	it('renders', () => {
		shallow(<Header />);
	});

	it('doesn\'t show the modal', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('InfoModal').exists()).toEqual(false);
	});

	it('shows the modal', () => {
		const wrapper = shallow(<Header />);
		wrapper.instance().toggleInfoModal(true);
		expect(wrapper.find('InfoModal').exists()).toEqual(true);
	});


});