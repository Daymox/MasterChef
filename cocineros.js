export class Cocinero {
	constructor() {
		this.especialidad = '';
	}

	cambiarEspecialidad(nuevaEspecialidad) {
		this.especialidad = nuevaEspecialidad;
	}

	cocinarPlato() {
		// Método abstracto
	}

	catarPlato(plato) {
		// Método abstracto
	}

	participarTorneo(torneo) {
		const plato = this.cocinarPlato();
		const puntuacionPlato = torneo.evaluarPlato(plato, this);
		torneo.agregarParticipante(this, plato, puntuacionPlato);
	}
}
