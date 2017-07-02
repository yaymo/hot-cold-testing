import {NEW_GAME, MAKE_GUESS, TOGGLE_INFO_MODAL} from '../actions'

const initialState = {
	guesses: [],
	feedback: 'Make your guess!',
	correctAnswer: Math.round(Math.random()*100),
	showInfoModal: false
}

export default (state=initialState, action) => {
	if(action.type === NEW_GAME){
		return Object.assign({}, initialState, {
			correctAnswer: action.correctAnswer
		});
	}
	else if(action.type === MAKE_GUESS){
		const guess = parseInt(action.guess, 10);
		if(isNaN(guess)){
			return Object.assign({}, state, {
				feedback: 'Please enter a valid number!'
			});
		}
		const diff = Math.abs(guess - state.correctAnswer);
		let feedback;
		if(diff >= 50){
			feedback = 'You\'re Ice Cold'
		}
		else if(diff >= 30){
			feedback = 'You\'re Cold'
		}
		else if(diff >= 10){
			feedback = 'You\'re Warm'
		}
		else if(diff >= 1){
			feedback = 'You\'re Hot'
		}
		else{
			feedback = 'You got it!'
		}
		return Object.assign({}, state, {
			feedback,
			guesses:[...state.guesses, guess]
		});

	}
	else if(action.type === TOGGLE_INFO_MODAL){

		return Object.assign({}, state, {
			showInfoModal: !state.showInfoModal
		});

	}

	return state;
}
