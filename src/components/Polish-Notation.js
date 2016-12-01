import React from 'react';

const Polish = ({ polishNotation, calculatePolishNotation }) => {
	let input;
	return (
		<div className="ui form">
			<div className="two fields">
				<div className="field">
					<div className="ui labeled input">
						<div className="ui label">Polish Notation:</div>
						<input type="text" ref={node => { input = node }} placeholder="Type polish notation here..." />
					</div>
				</div>
				<div className="field">
					<div className="ui labeled input">
						<div className="ui label">Polish Notation Result:</div>
						<input type="text" placeholder="Result shows here..." value={polishNotation}  readOnly/>
					</div>
				</div>
			</div>
			 <div className="ui positive button" onClick={() => calculatePolishNotation(input.value)}>Calculate Polish Notation</div>
		</div>
	);
};

export default Polish;
