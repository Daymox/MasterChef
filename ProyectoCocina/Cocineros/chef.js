import { Cocinero } from './cocineros.js';
import { Platos } from '../Platos/menu.js';

export class Chef extends Cocinero {
	constructor(caloriasPreferidas) {
		super();
		this.especialidad = 'chef';
		this.caloriasPreferidas = caloriasPreferidas;
	}

	// Punto #2
	catarPlato(plato) {
		return plato.bonito && this.caloriasPreferidas === plato.calorias ? 10 : 0;
	}
}
