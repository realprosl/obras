const mongo = require('mongoose');
const Schema = mongo.Schema;

const usuariosSchema = new Schema({
    usuario: String,
    contrasena : String
}, { versionKey: false });

// Crear el modelo
const Usuarios = mongo.model('usuarios', usuariosSchema);

module.exports = Usuarios;
