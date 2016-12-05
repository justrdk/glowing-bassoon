import { SET_POLISH_RESULT, UPDATE_DNA_VALIDATION, ADD_DNA, CLEAR_DNAS, ADD_WATER_BODY, SET_AMOUNT_BODIES, SET_SIZES } from './actions';
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
};

const water = (state = { amountBodies: 0, bodies: [], sizes: 0 }, action) => {
	switch (action.type) {
		case SET_AMOUNT_BODIES:
			return Object.assign({}, state, {
				amountBodies: action.amountBodies
			});
		case ADD_WATER_BODY:
			return Object.assign({}, state, {
				bodies: [...state.bodies, action.body]
			});
		case SET_SIZES:
			return Object.assign({}, state, {
				sizes: action.sizes
			});
		default:
			return state;
	}
};

const calculationsApp = combineReducers({
	polishNotation,
	dnas,
	water
});

export default calculationsApp;
