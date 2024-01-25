import { Plato } from './platos.js';

export class PlatoPrincipal extends Plato {
	constructor(azucar, calorias) {
		super();
		this.azucar = azucar;
		this.calorias = calorias;
		this.bonito = false;
	}
}
