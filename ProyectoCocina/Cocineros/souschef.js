import { Cocinero } from './cocineros.js';
import { Platos } from '../Platos/menu.js';

// Punto #4
export class SousChef extends Cocinero {
	constructor() {
		super();
		this.especialidad = 'souschef';
	}

	cocinarPlato() {
		const entrada = Platos.crearEntrada();
		return entrada;
	}

	catarPlato(plato) {
		return plato.bonito && this.caloriasPreferidas === plato.calorias
			? 10
			: Math.min(plato.calorias / 100, 6);
	}
}
