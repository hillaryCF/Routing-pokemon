import Img from '../components/cardImg/img';
import React, { Component } from 'react';

class Api extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Loaded: false,
		}
	}

	componentDidMount() {
		fetch('https://api.pokemontcg.io/v1/cards')
			.then(res => res.json())
			.then(json => {
				console.log(json)
				this.setState({
					Loaded: true,
					items: json,
				})
			});
	}

	render() {
		const { Loaded, items } = this.state;
	
		if (!Loaded) {

			return <div>loading...</div>;

		} else {
			return (
				<div>
					{items.cards.map(e => (
						<Img to={`/poke-info/${e.name}`} namecard={e.id} name={e.name} {...e} ></Img>
					))}
				</div>
			)
		}
	}
}

export default Api;