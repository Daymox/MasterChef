export class Plato {
	constructor() {
		this.azucar = 0;
		this.calorias = 0;
		this.bonito = false;
	}

	// Punto #1
	calcularCalorias() {
		this.calorias = 3 * this.azucar + 100;
	}
}
