import React from 'react';

function Stats({ powerstats }) {
	var intelligence = powerstats['intelligence'] + '%';
	var strength = powerstats['strength'] + '%';
	var power = powerstats['power'] + '%';
	var durability = powerstats['durability'] + '%';
	var speed = powerstats['speed'] + '%';
	var combat = powerstats['combat'] + '%';

	return (
		<section className='stats' style={{ boxSizing: 'border-box' }}>
			<div
				className='intelligence'
				style={{ width: '100%', backgroundColor: '#212121' }}
			>
				<p>Intelligence</p>
				<div
					className='skill'
					style={{
						width: intelligence,
						textAlign: 'right',
						paddingTop: '10px',
						paddingBottom: '10px',
						backgroundColor: '#FFF',
						color: '#000'
					}}
				>
					{' '}
					{powerstats['intelligence']}{' '}
				</div>
			</div>
			<div
				className='strength'
				style={{ width: '100%', backgroundColor: '#212121' }}
			>
				<p>Strength</p>
				<div
					className='skill'
					style={{
						width: strength,
						textAlign: 'right',
						paddingTop: '10px',
						paddingBottom: '10px',
						backgroundColor: '#FFF',
						color: '#000'
					}}
				>
					{' '}
					{powerstats['strength']}{' '}
				</div>
			</div>
			<div
				className='speed'
				style={{ width: '100%', backgroundColor: '#212121' }}
			>
				<p>Speed</p>
				<div
					className='skill'
					style={{
						width: speed,
						textAlign: 'right',
						paddingTop: '10px',
						paddingBottom: '10px',
						backgroundColor: '#FFF',
						color: '#000'
					}}
				>
					{' '}
					{powerstats['speed']}{' '}
				</div>
			</div>
			<div
				className='durability'
				style={{ width: '100%', backgroundColor: '#212121' }}
			>
				<p>Durability</p>
				<div
					className='skill'
					style={{
						width: durability,
						textAlign: 'right',
						paddingTop: '10px',
						paddingBottom: '10px',
						backgroundColor: '#FFF',
						color: '#000'
					}}
				>
					{powerstats['durability']}
				</div>
			</div>
			<div
				className='power'
				style={{ width: '100%', backgroundColor: '#212121' }}
			>
				<p>Power</p>
				<div
					className='skill'
					style={{
						width: power,
						textAlign: 'right',
						paddingTop: '10px',
						paddingBottom: '10px',
						backgroundColor: '#FFF',
						color: '#000'
					}}
				>
					{powerstats['power']}{' '}
				</div>
			</div>
			<div
				className='combat'
				style={{ width: '100%', backgroundColor: '#212121' }}
			>
				<p>Combat</p>
				<div
					className='skill'
					style={{
						width: combat,
						textAlign: 'right',
						paddingTop: '10px',
						paddingBottom: '10px',
						backgroundColor: '#FFF',
						color: '#000'
					}}
				>
					{powerstats['combat']}
				</div>
			</div>
		</section>
	);
}

export default Stats;
