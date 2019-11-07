import React, { useState } from 'react';
import Img from '../components/cardImg/img';
import './fetch.css';

export default () => {
	const [cards, setCards] = useState('');

	fetch('https://api.pokemontcg.io/v1/cards')
		.then(res => res.json())
		.then(res => setCards(res.cards.map((card, i) =><Img name={i} {...card} />)))
		console.log(cards)
	return (
		<div className="cards">
			{cards}
			
		</div>
	)
}

