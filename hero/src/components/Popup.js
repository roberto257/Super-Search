import React from 'react';
import Stats from './Stats';
import '../styles/Popup.css';

function Popup({ selected, closePopup }) {
	return (
		<section className='popup'>
			<div className='content'>
				<h1>{selected['name']}</h1>
				<img src={selected['image']['url']} alt='hero' />
				<div className='info'>
					<p className='full-name'>
						Name: {selected['biography']['full-name']}
					</p>
					<p className='other-info'>
						Birthplace: {selected['biography']['place-of-birth']}
					</p>
					<p className='other-info'>
						Occupation: {selected['work']['occupation']}
					</p>
				</div>
				<Stats powerstats={selected['powerstats']} />
				<button className='close' onClick={closePopup}>
					Close
				</button>
			</div>
		</section>
	);
}

export default Popup;
