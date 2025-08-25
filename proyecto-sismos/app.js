import { parseEvent, isSignificant, fmt, TypeDict } from "./helpers.js";
import { dataFromRequest } from './earthquakes.js'

const geo = await dataFromRequest() //Ponemos await

const events = geo.features.map(parseEvent)//Eventos tranformados

//[].map
const magValue = 5

const strong = events.filter( e => isSignificant(e, magValue))
const top5 = [...events].sort((a,b) => b.mag - a.mag).slice(0, 5)
const byType = events.reduce((acc, e) => (acc[e.type] = (acc[e.type] ?? 0) + 1, acc), {});

events.forEach(e => TypeDict.add(e.type));

console.table(top5.map(e => ({
    id: e.id, mag: e.mag, place: e.place, time: fmt.date(e.time), where: fmt.coord(e.coords)
})));
console.table(TypeDict.entries());
console.table(TypeDict.entries().map(([type, n]) => ({type, count: n})))


