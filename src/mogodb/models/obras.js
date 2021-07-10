const mongo = require('mongoose');
const Schema = mongo.Schema;

const obrasSchema = new Schema({
    fecha: String,
    obras : String,
    operario: String,
    ejecucion : String
}, { versionKey: false });

// Crear el modelo
const Obras = mongo.model('obras', obrasSchema);

module.exports = Obras;

