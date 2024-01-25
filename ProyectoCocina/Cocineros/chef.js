import { Cocinero } from './cocineros.js';
import { Platos } from '../Platos/menu.js';

export class Chef extends Cocinero {
	constructor(caloriasPreferidas) {
		super();
		this.especialidad = 'chef';
		this.caloriasPreferidas = caloriasPreferidas;
	}

	cocinarPlato() {
		const platoPrincipal = Platos.crearPlatoPrincipal(
			this.caloriasPreferidas,
			this.caloriasPreferidas
		);
		platoPrincipal.calcularCalorias();
		return platoPrincipal;
	}

	catarPlato(plato) {
		return plato.bonito && this.caloriasPreferidas === plato.calorias ? 10 : 0;
	}
}
