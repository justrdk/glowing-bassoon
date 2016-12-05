import React from 'react';

const Water = ({ bodies, addWaterBody, setAmountBodies, sortBodiesWater, sizes }) => {
	let inputWaterBody;
	let inputAmountBodies;
	return (
		<div style={{marginTop: 10}}>
			<div className="ui form">
				<div className="two fields">
					<div className="field">
						<div className="ui labeled input">
							<div className="ui label">Amount Lines:</div>
							<input type="text" ref={node => { inputAmountBodies = node }} placeholder="Type amount of lines" />
						</div>
						<div className="ui labeled input">
							<div className="ui label">Water Bodies:</div>
							<input type="text" ref={node => { inputWaterBody = node }} placeholder="Type line integers separated by spaces" />
						</div>
						<div className="ui labeled input">
							<div className="ui label">Result:</div>
							<textarea value={sizes} readOnly/>
						</div>
					</div>
				</div>
				<div className="ui positive button" onClick={() => setAmountBodies(inputAmountBodies.value)}>Set Number of lines</div>
				<div className="ui positive button" onClick={() => addWaterBody(inputWaterBody.value)}>Add Line</div>
				<div className="ui positive button" onClick={() => sortBodiesWater(inputAmountBodies.value, bodies)}>Calculate Bodies of Water</div>
			</div>
			<table className="ui celled single line fixed table">
				<thead>
					<tr>
						<th>Body of water</th>
					</tr>
					{bodies.map((waterBody, index) => {
						return (<tr key={index}>
						<td>{waterBody}</td>
						</tr>)
					})}
				</thead>
			</table>
		</div>
	);
};

export default Water;
