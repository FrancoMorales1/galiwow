import { Schema, model } from 'mongoose';

const tituloSchema = new Schema({
    name: { type: String, default: "" }, 
    owner: { type: String, default: "" }, 
    description: { type: String, default: "" }, 
});

const Titulo = model('Titulo', tituloSchema);

export default Titulo;