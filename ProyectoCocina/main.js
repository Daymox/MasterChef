import { Chef } from './Cocineros/chef.js';
import { Pastelero } from './Cocineros/pastelero.js';
import { SousChef } from './Cocineros/souschef.js';
import { Torneo } from './Torneos/torneos.js';

const chefUno = new Chef(500);
const sousChefUno = new SousChef();
const pasteleroUno = new Pastelero(4);

const torneo = new Torneo();

const entrada = sousChefUno.cocinarPlato();
const platoPrincipal = chefUno.cocinarPlato();
const postre = pasteleroUno.cocinarPlato(4);

torneo.agregarCatador(pasteleroUno);
torneo.agregarCatador(chefUno);
torneo.agregarCatador(sousChefUno);

pasteleroUno.participarTorneo(torneo);
chefUno.participarTorneo(torneo);
sousChefUno.participarTorneo(torneo);

const ganador = torneo.encontrarGanador();

console.log('Entrada:', entrada);
console.log('Plato principal:', platoPrincipal);
console.log('Postre:', postre);

console.log('Cocinero Ganador:', ganador ? ganador.especialidad : 'Ninguno');
