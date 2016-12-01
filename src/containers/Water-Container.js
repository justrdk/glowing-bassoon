import { connect } from 'react-redux';
import Water from '../components/Water';
import { addWaterBody, setAmountBodies} from '../actions';

const getConnectedBodyOfWater = (matrix, d, i, j) => {
	let bodyId = 0;

	if (i > 0) {
		bodyId = matrix[i - 1][j];
	}
	if (j > 0) {
		bodyId = Math.max(bodyId, matrix[i][j - 1]);
	}
	if (i > 0 && j > 0) {
		bodyId = Math.max(bodyId, matrix[i - 1][j - 1]);
	}
	if (i + 1 < d) {
		bodyId = Math.max(bodyId, matrix[i + 1][j]);
	}
	if (j + 1 < d) {
		bodyId = Math.max(bodyId, matrix[i][j + 1]);
	}
	if (i + 1 < d && j > 0) {
		bodyId = Math.max(bodyId, matrix[i + 1][j - 1]);
	}
	if (i > 0 && j + 1 < d) {
		bodyId = Math.max(bodyId, matrix[i - 1][j + 1]);
	}

	return bodyId;
};

const calculateBodiesOfWater = (amountBodiesOfWater, bodiesOfWater) => {
	console.log(amountBodiesOfWater);
	console.log(bodiesOfWater);
	let maxBodyOfWater = 0;
	const countMatrix = new Array(amountBodiesOfWater);
	for (let i = 0; i < amountBodiesOfWater; i++) {
		countMatrix[i] = new Array();
	}
	const results = [];

	for (let k = 0; k < amountBodiesOfWater * 2; k++) {
		for (let j = 0; j <= k; j++) {
			const i = k - j;
			if (i < amountBodiesOfWater && j < amountBodiesOfWater) {
				if (bodiesOfWater[i][j] !== 0) {
					countMatrix[i][j] = 0;
				} else {
					let bodyId = getConnectedBodyOfWater(countMatrix, amountBodiesOfWater, i, j);
					if (bodyId === 0) {
						maxBodyOfWater++;
						results.push(1);
						countMatrix[i][j] = maxBodyOfWater;
					} else {
						if (results.length > bodyId - 1) {
							results[bodyId - 1] = results[(bodyId - 1) + 1]
						} else {
							results.push(1);
							countMatrix[i][j] = bodyId;
						}
					}
				}
			}
		}
	}

	results.sort();
	return results;
};

const mapStateToProps = (state) => {
	return {
		...state.water,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setAmountBodies: (amountBodies) => {
			dispatch(setAmountBodies(amountBodies));
		},
		addWaterBody: (bodies) => {
			dispatch(addWaterBody(bodies.split(' ')));
		},
		sortBodiesWater: (amountBodies, bodies) => {
			console.log('wtf', calculateBodiesOfWater(amountBodies, bodies));
		}
	};
}

const WaterContainer = connect(mapStateToProps, mapDispatchToProps)(Water);
export default WaterContainer;
