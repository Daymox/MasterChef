import { Cocinero } from './cocineros.js';
import { Platos } from '../Platos/menu.js';

export class Pastelero extends Cocinero {
	constructor(nivelDulzor) {
		super();
		this.especialidad = 'pastelero';
		this.nivelDulzor = nivelDulzor;
	}

	cocinarPlato(colores) {
		const postre = Platos.crearPostre(colores);
		postre.setAzucar(this.nivelDulzor * 50);
		postre.calcularCalorias();
		return postre;
	}

	catarPlato(plato) {
		let calificacionPlato = (5 * plato.azucar) / this.nivelDulzor;
		return calificacionPlato > 10 ? 10 : calificacionPlato;
	}
}
