// Punto #6
export class Torneo {
	constructor() {
		this.catadores = [];
		this.participantes = [];
	}

	agregarCatador(catador) {
		this.catadores.push(catador);
	}

	agregarParticipante(cocinero, plato, puntuacion) {
		this.participantes.push({ cocinero, plato, puntuacion });
	}

	evaluarPlato(plato) {
		let puntuacionTotal = 0;
		for (const catador of this.catadores) {
			puntuacionTotal += catador.catarPlato(plato);
		}
		return puntuacionTotal;
	}

	encontrarGanador() {
		if (this.participantes.length === 0) {
			return null;
		}
		return this.participantes.reduce(
			(mejor, participante) =>
				participante.puntuacion > mejor.puntuacion ? participante : mejor,
			this.participantes[0]
		).cocinero;
	}
}
