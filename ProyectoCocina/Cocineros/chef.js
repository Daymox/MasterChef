import { Cocinero } from './cocineros.js';
import { Platos } from '../Platos/menu.js';

export class Chef extends Cocinero {
	constructor(caloriasPreferidas) {
		super();
		this.especialidad = 'chef';
		this.caloriasPreferidas = caloriasPreferidas;
	}

	// Punto #5
	cocinarPlato() {
		const platoPrincipal = Platos.crearPlatoPrincipal(
			this.caloriasPreferidas,
			this.caloriasPreferidas
		);
		platoPrincipal.calcularCalorias();
		return platoPrincipal;
	}
}
