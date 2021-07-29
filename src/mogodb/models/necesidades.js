const mongo = require('mongoose');
const Schema = mongo.Schema;

const necesidadesSchema = new Schema({
    fecha: String,
    obra : String,
    descripcion : String,
},{ versionKey: false });

// Crear el modelo
const Necesidades = mongo.model('necesidades', necesidadesSchema);

module.exports = Necesidades;