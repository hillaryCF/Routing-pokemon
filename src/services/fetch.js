import Img from '../components/cardImg/img';
import React, { Component } from 'react';

class Api extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon: [],
			Loaded: false,
		}
	}

	componentDidMount() {
		fetch('https://api.pokemontcg.io/v1/cards')
			.then(res => res.json())
			.then(json => {
				this.setState({
					Loaded: true,
					items: json,
				})
			});
	}

	render() {
		var { Loaded, items } = this.state;
		console.log(items)
		if (!Loaded) {

			return <div>loading...</div>;

		} else {
			return (
				<div>
					{items.cards.map(e => (
						<Img key={e.id} name={e.name} {...e}></Img>
					))}
				</div>
			)
		}
	}
}

export default Api;