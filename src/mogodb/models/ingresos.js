const mongo = require('mongoose');
const Schema = mongo.Schema;

const ingresosSchema = new Schema({
    fecha: String,
    obra : String,
    presupuesto : Number,
    pagado : Number,
},{ versionKey: false });

// Crear el modelo
const Ingresos = mongo.model('ingresos', ingresosSchema);

module.exports = Ingresos;