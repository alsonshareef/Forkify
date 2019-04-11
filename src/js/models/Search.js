export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		const API_Key = '55f16311f10d3ef766ae41e661a3bb55';
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
