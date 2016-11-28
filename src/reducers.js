import { SET_POLISH_RESULT, UPDATE_DNA_VALIDATION, ADD_DNA, CLEAR_DNAS } from './actions';
import { combineReducers } from 'redux';

const polishNotation = (state = 0, action) => {
	switch (action.type) {
		case SET_POLISH_RESULT:
			return Object.assign({}, state, {
				polishNotation: action.polishNotation
			});
		default:
			return state;
	}
};

const dnas = (state = [], action) => {
	switch (action.type) {
		case ADD_DNA:
			return [...state, {
				dna: action.dna,
				valid: false
			}]
		case UPDATE_DNA_VALIDATION:
			return state.map((dna, index) => {
				if (index === action.index) {
					return Object.assign({}, dna, {
						valid: action.validDna
					});
				}
				return dna;
			});
		case CLEAR_DNAS:
			return [];
		default:
			return state;
	}
}

const calculationsApp = combineReducers({
	polishNotation,
	dnas,
});

export default calculationsApp;
