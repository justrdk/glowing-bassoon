import { connect } from 'react-redux';
import PolishNotation from '../components/Polish-Notation';
import { setPolishResult } from '../actions';

const calculatePolishNotation = (polishNotation) => {
	if (!polishNotation.trim()) {
		return;
	}
	const arr = polishNotation.split(/\s+/);
	const result = [];
	let token;
	const operators = '+-*/';

	while (token = arr.shift()) {
		if (operators.indexOf(token) === -1) {
			result.push(token);
		} else {
			const num2 = result.pop();
			const num1 = result.pop();
			const re = /^[\+\-\/\*]$/;
			if (num1 != +num1 || num2 != +num2 || !re.test(token)) {
				throw new Error('Invalid expression');
			}
			result.push(eval(num1 + token + ' ' + num2));
		}
	}
	if (result.length !== 1) {
		console.log('Invalid expression');
	}
	return result.pop();
};

const mapStateToProps = (state) => {
	return {
		...state.polishNotation,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		calculatePolishNotation: (polishNotation) => {
			dispatch(setPolishResult(calculatePolishNotation(polishNotation)));
		}
	}
};

const PolishContainer = connect(mapStateToProps, mapDispatchToProps)(PolishNotation);
export default PolishContainer;
