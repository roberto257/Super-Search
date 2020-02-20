import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';

function App() {
	/* Set our state. S is what will be searched and added to the end of the url,
  results is an array of heroes that are found in the search. No hero selected at the start  */
	const [state, setState] = useState({
		s: '',
		selected: {},
		results: [],
		showResults: true
	});
	//URLS that will be used for our search
	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const apiurl = 'https://superheroapi.com/api/2564682743856775/';

	//Function to search for whoever is inputted
	const search = e => {
		if (e.key === 'Enter') {
			axios(apiurl + 'search/' + state.s).then(({ data }) => {
				let results = data.results;

				//If we get an empty response, so we don't get an error in react
				if (typeof results === 'undefined') {
					setState(prevState => {
						return { ...prevState, showResults: false };
					});
				}
				setState(prevState => {
					return { ...prevState, results: results };
				});
			});
		}
	};
	//Update our 's' in the state so that we can add it to the URL and search
	const handleInput = e => {
		let s = e.target.value;
		setState(prevState => {
			return { ...prevState, s: s };
		});
	};
	//Open a popup when a hero is clicked
	const openPopup = id => {
		axios(proxyurl + apiurl + id).then(({ data }) => {
			let result = data;
			//Show info in console
			console.table(result);
			setState(prevState => {
				return { ...prevState, selected: result };
			});
		});
	};
	//Close the selected popup
	const closePopup = () => {
		setState(prevState => {
			return { ...prevState, selected: {} };
		});
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Super Search</h1>
			</header>
			<main>
				<Search handleInput={handleInput} search={search} />
				{state.showResults ? (
					<Results results={state.results} openPopup={openPopup} />
				) : (
					window.alert('No results found. ')
				)}
				{typeof state.selected.id != 'undefined' ? (
					<Popup selected={state.selected} closePopup={closePopup} />
				) : (
					false
				)}
			</main>
		</div>
	);
}
/*
TODO: Fix popup css, handle when no results are found. 
https://colorhunt.co/palette/62193
https://colorhunt.co/palette/62193
https://pusher.com/tutorials/consume-restful-api-react
*/

export default App;
