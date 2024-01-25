import { Plato } from './platos.js';

export class Postre extends Plato {
	constructor(colores) {
		super();
		this.colores = colores;
		this.azucar = 120;
		this.bonito = this.esBonito();
	}

	esBonito() {
		return this.colores > 3;
	}
}
