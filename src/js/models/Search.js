import { API_Key } from '../config';

// --
export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		try {
			let result = await fetch(
				`https://www.food2fork.com/api/search?key=${API_Key}&q=${this.query}`
			).then((res) => res.json());
			this.recipes = result.recipes;
			// console.log(this.recipes)
		} catch (error) {
			alert(error);
		}
	}
}
