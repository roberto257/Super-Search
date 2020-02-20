import React from 'react';

function Result({ result, openPopup }) {
	return (
		<div className='result' onClick={() => openPopup(result.id)}>
			<h3>{result.name}</h3>
			<img src={result.image.url} alt='hero' />
		</div>
	);
}

export default Result;
