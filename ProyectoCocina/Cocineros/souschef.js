import { Cocinero } from './cocineros.js';
import { Platos } from '../Platos/menu.js';

export class SousChef extends Cocinero {
	constructor() {
		super();
		this.especialidad = 'souschef';
	}
	
	// Punto #2
	catarPlato(plato) {
		return plato.bonito && this.caloriasPreferidas === plato.calorias
			? 10
			: Math.min(plato.calorias / 100, 6);
	}
}
