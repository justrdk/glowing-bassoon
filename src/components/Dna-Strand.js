import React from 'react';

const DnaStrand = ({ dnas, addDna, validateDna, clearDnas }) => {
	let input;
	const validateDnas = () => {
		dnas.forEach((dna, index) => {
			validateDna(dna, index);
		});
	}
	return (
		<div style={{marginTop: 10}}>
			<div className="ui form">
				<div className="two fields">
					<div className="field">
						<div className="ui labeled input">
							<div className="ui label">DNA Strand:</div>
							<input type="text" ref={node => { input = node }} placeholder="Type DNA Strand here..." />
						</div>
					</div>
				</div>
				 <div className="ui positive button" onClick={() => addDna(input.value)}>Add DNA</div>
				 <div className="ui primary button" onClick={() => validateDnas()}>Validate DNAS</div>
				 <div className="ui primary button" onClick={() => clearDnas()}>Clear DNAS</div>
			</div>
			<table className="ui celled single line fixed table">
				<thead>
					<tr>
						<th>DNA</th>
						<th>Valid</th>
					</tr>
					{dnas.map((dna, index) => {
						return (<tr key={index}>
						<td>{dna.dna}</td>
						<td>{dna.valid ? 'YES': 'NO'}</td>
						</tr>)
					})}
				</thead>
			</table>
		</div>
	);
};

export default DnaStrand;
