export const SET_POLISH_RESULT = 'SET_POLISH_RESULT';
export const ADD_DNA = 'ADD_DNA';
export const UPDATE_DNA_VALIDATION = 'UPDATE_DNA_VALIDATION';
export const CLEAR_DNAS = 'CLEAR_DNAS';
export const ADD_WATER_BODY = 'ADD_WATER_BODY';
export const SET_AMOUNT_BODIES = 'SET_AMOUNT_BODIES';

export function setPolishResult(result) {
	return {
		type: SET_POLISH_RESULT,
		polishNotation: result,
	};
};

export function addDna(dna) {
	return {
		type: ADD_DNA,
		dna
	};
};

export function updateDnaValidation(validDna, index) {
	return {
		type: UPDATE_DNA_VALIDATION,
		validDna,
		index
	};
};

export function clearDnas() {
	return {
		type: CLEAR_DNAS
	};
};

export function addWaterBody(body) {
	return {
		type: ADD_WATER_BODY,
		body
	}
};

export function setAmountBodies(amountBodies) {
	return {
		type: SET_AMOUNT_BODIES,
		amountBodies
	}
}
