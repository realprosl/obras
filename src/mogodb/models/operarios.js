const mongo = require('mongoose');
const Schema = mongo.Schema;

const operariosSchema = new Schema({
    geo : String,
    hora: String,
    usuario: String,
    fecha : String,
    entrada : String,
    salida : String,
    obra: String,
    trabajo: String

}, { versionKey: false });

// Crear el modelo
const Operarios = mongo.model('operarios', operariosSchema);

module.exports = Operarios;