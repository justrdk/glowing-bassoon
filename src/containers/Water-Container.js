import { connect } from 'react-redux';
import Water from '../components/Water';
import { addWaterBody, setAmountBodies, setBodySizes } from '../actions';

const connectBodyOfWater = (bodiesOfWater, markedPositions, i, j) => {
	let size = 1;

	if (bodiesOfWater[i] === undefined || bodiesOfWater[i][j] !== 0 || markedPositions[`${i},${j}`]) {
		return 0;
	}
	markedPositions[`${i},${j}`] = true;
	size+= connectBodyOfWater(bodiesOfWater, markedPositions, i+1, j);
	size+= connectBodyOfWater(bodiesOfWater, markedPositions, i+1, j+1);
	size+= connectBodyOfWater(bodiesOfWater, markedPositions, i+1, j-1);
	size+= connectBodyOfWater(bodiesOfWater, markedPositions, i-1, j-1);
	size+= connectBodyOfWater(bodiesOfWater, markedPositions, i-1, j+1);
	size+= connectBodyOfWater(bodiesOfWater, markedPositions, i-1, j);
	size+= connectBodyOfWater(bodiesOfWater, markedPositions, i, j-1);
	size+= connectBodyOfWater(bodiesOfWater, markedPositions, i, j+1);
	return size;
};
const calculateBodiesOfWater = (amountBodiesOfWater, bodiesOfWater) => {
	const amountBodiesInt = parseInt(amountBodiesOfWater);
	const markedPositions = {};
	const sizes = [];

	for (let i = 0; i < bodiesOfWater.length; i++) {
		for (let j = 0; j < bodiesOfWater.length; j++) {
			if(markedPositions[`${i},${j}`]) {
				continue;
			}
			if(bodiesOfWater[i][j] === 0) {
				sizes.push(connectBodyOfWater(bodiesOfWater, markedPositions, i, j));
			}
		}
	}
	return sizes.sort().join('\n');
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
			dispatch(addWaterBody(bodies.split(' ').map(item => parseInt(item))));
		},
		sortBodiesWater: (amountBodies, bodies) => {
			dispatch(setBodySizes(calculateBodiesOfWater(amountBodies, bodies)));
		}
	};
}

const WaterContainer = connect(mapStateToProps, mapDispatchToProps)(Water);
export default WaterContainer;
