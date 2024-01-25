import { Entrada } from './entrada.js';
import { PlatoPrincipal } from './principal.js';
import { Postre } from './postre.js';

export const Platos = {
	crearEntrada() {
		return new Entrada();
	},

	crearPlatoPrincipal(azucar, calorias) {
		return new PlatoPrincipal(azucar, calorias);
	},

	crearPostre(colores) {
		return new Postre(colores);
	},
};
