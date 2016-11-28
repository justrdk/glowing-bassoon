import { connect } from 'react-redux';
import DnaStrand from '../components/Dna-Strand';
import { addDna, updateDnaValidation, clearDnas } from '../actions';

const dnaValidation = (dna) => {
	if (dna.length % 2 === 1) {
		return false;
	}
	const dnaPairs = {
		U: 'Z',
		Z: 'U',
		V: 'Y',
		Y: 'V',
		W: 'X',
		X: 'W'
	};

	for (let i = 0; i < dna.length / 2; i++) {
		const expectedMatch = dnaPairs[dna[i]];
		if (!expectedMatch || expectedMatch !== dna[dna.length - i - 1]) {
			return false;
		}
	}
	return true;
};

const mapStateToProps = (state) => {
	return {
		dnas: state.dnas,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addDna: (dna) => {
			dispatch(addDna(dna));
		},
		validateDna: (dna, index) => {
			dispatch(updateDnaValidation(dnaValidation(dna.dna), index))
		},
		clearDnas: () => {
			dispatch(clearDnas());
		}
	}
}

const DNAContainer = connect(mapStateToProps, mapDispatchToProps, )(DnaStrand);
export default DNAContainer;
