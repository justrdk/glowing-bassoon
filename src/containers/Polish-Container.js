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
			const num1 = result.pop();
			const num2 = result.pop();
			result.push(eval(num1 + token + ' ' + num2));
		}
	}
	return result.pop();
};

const mapStateToProps = (state) => {
	return {
		polishNotation: state.polishNotation,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		calculatePolishNotation: (polishNotation) => {
			dispatch(setPolishResult(calculatePolishNotation(polishNotation)));
		}
	}
}

const PolishContainer = connect(mapStateToProps, mapDispatchToProps)(PolishNotation);
export default PolishContainer;
