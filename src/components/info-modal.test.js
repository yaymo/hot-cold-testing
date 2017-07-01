import React from 'react'
import InfoModal from './info-modal'
import {shallow, mount} from 'enzyme'

describe('<InfoModal />', () => {
	it('renders', () => {
		shallow(<InfoModal />);
	});
	it('fires callback', () => {
		const callback = jest.fn();
		const wrapper = shallow(<InfoModal onClose={callback} />);
		wrapper.find('.close').simulate('click', {
			preventDefault() {}
		});
		expect(callback).toHaveBeenCalled();
	});
});