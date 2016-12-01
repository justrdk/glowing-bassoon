import React from 'react';
import PolishContainer from '../containers/Polish-Container';
import DNAContainer from '../containers/DNA-Container';
import WaterContainer from '../containers/Water-Container';

const App = () => {
	return (
		<div className="ui inverted segment">
			<h1 className="ui inverted orange header"> Exercises </h1>
			<PolishContainer />
			<DNAContainer />
			<WaterContainer />
		</div>
	);
};

export default App;
