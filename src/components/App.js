import React from 'react';
import PolishContainer from '../containers/Polish-Container';
import DNAContainer from '../containers/DNA-Container';

const App = () => {
	return (
		<div className="ui inverted segment">
			<h1 className="ui inverted orange header"> Exercises </h1>
			<PolishContainer />
			<DNAContainer />
		</div>
	);
};

export default App;
