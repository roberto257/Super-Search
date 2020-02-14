import React from 'react';

function Popup({ selected, closePopup }) {
	return (
		<section className='popup'>
			<div className='content'>
				<h2>{selected['name']}</h2>
				<img src={selected['image']['url']} />
				<div className='info'>
					<p className='full-name'>
						{' '}
						Name: {selected['biography']['full-name']}{' '}
					</p>
					<p className='other-info'>
						{' '}
						Birthplace: {
							selected['biography']['place-of-birth']
						}{' '}
					</p>
					<p className='other-info'>
						{' '}
						Occupation: {selected['name']}{' '}
					</p>
				</div>
				<button className='close' onClick={closePopup}>
					Close
				</button>
			</div>
		</section>
	);
}

export default Popup;
