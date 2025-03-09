import { Schema, model } from 'mongoose';

const personajeSchema = new Schema({
    rol: { type: String, default: "" }, 
    twitch: { type: String, default: "" }, 
    clase: { type: String, default: "" }, 
    talento: { type: String, default: "" }, 
    profesion1: { type: String, default: "" }, 
    profesion2: { type: String, default: "" }, 
});

const Personaje = model('Personaje', personajeSchema);

export default Personaje;