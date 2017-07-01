import React from 'react'
import {shallow, mount} from 'enzyme'
import Header from './header'
import GuessCount from './guess-count'
import GuessSection from './guess-section'
import GuessList from './guess-list'
import Game from './game'

describe('<Game />', () => {
	it('renders', () => {
		shallow(<Game />);
	});

	it('simulates a game', () => {
		const wrapper = shallow(<Game />);

		wrapper.setState({
			guesses:[1, 2, 3, 4],
			feedback:'So Close!',
			correctAnswer: 10
		});

		wrapper.instance().newGame();
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
		expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
		expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
	});

	it('makes and checks guesses', () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({
			correctAnswer: 100
		});

		wrapper.instance().guess(10);
		expect(wrapper.state('guesses')).toEqual([10]);
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

		wrapper.instance().guess(61);
		expect(wrapper.state('guesses')).toEqual([10, 61]);
		expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

		wrapper.instance().guess(82);
		expect(wrapper.state('guesses')).toEqual([10, 61, 82]);
		expect(wrapper.state('feedback')).toEqual('You\'re Warm');

		wrapper.instance().guess(94);
		expect(wrapper.state('guesses')).toEqual([10, 61, 82, 94]);
		expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

		wrapper.instance().guess(100);
		expect(wrapper.state('guesses')).toEqual([10, 61, 82, 94, 100]);
		expect(wrapper.state('feedback')).toEqual('You got it!');
	});
});