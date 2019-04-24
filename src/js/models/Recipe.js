import { API_Key } from '../config';

export default class Recipe {
	constructor(id) {
		this.id = id;
	}
	// Sets recipe object's props to data from API call
	async getRecipe() {
		try {
			let result = await fetch(`https://www.food2fork.com/api/get?key=${API_Key}&rId=${this.id}`).then((res) =>
				res.json()
			);
			this.title = result.recipe.title;
			this.publisher = result.recipe.publisher;
			this.image = result.recipe.image_url;
			this.url = result.recipe.source_url;
			this.ingredients = result.recipe.ingredients;
		} catch (error) {
			console.log(error);
			alert('Something went wrong :(');
		}
	}
	calcCookTime() {
		// Total cooking time estimated to be 15mins per every 3 ingredients
		let ingNum = this.ingredients.length;
		let periods = Math.ceil(ingNum / 3);
		this.time = periods * 15;
	}
	calcServings() {
		this.servings = 4;
	}
}
