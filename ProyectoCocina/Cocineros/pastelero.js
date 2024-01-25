import { Cocinero } from './cocineros.js';
import { Platos } from '../Platos/menu.js';

export class Pastelero extends Cocinero {
	constructor(nivelDulzor) {
		super();
		this.especialidad = 'pastelero';
		this.nivelDulzor = nivelDulzor;
	}

	// Punto #5
	cocinarPlato(colores) {
		const postre = Platos.crearPostre(colores);
		postre.setAzucar(this.nivelDulzor * 50);
		postre.calcularCalorias();
		return postre;
	}
}
