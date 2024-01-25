import { Cocinero } from './cocineros.js';
import { Platos } from '../Platos/menu.js';

export class SousChef extends Cocinero {
	constructor() {
		super();
		this.especialidad = 'souschef';
	}

	cocinarPlato() {
		const entrada = Platos.crearEntrada();
		return entrada;
	}
	
	// Punto #2
	catarPlato(plato) {
		return plato.bonito && this.caloriasPreferidas === plato.calorias
			? 10
			: Math.min(plato.calorias / 100, 6);
	}
}
