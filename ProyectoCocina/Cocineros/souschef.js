import { Cocinero } from './cocineros.js';
import { Platos } from '../Platos/menu.js';

export class SousChef extends Cocinero {
	constructor() {
		super();
		this.especialidad = 'souschef';
	}
	
	// Punto #5
	cocinarPlato() {
		const entrada = Platos.crearEntrada();
		return entrada;
	}
}
