const mongo = require('mongoose');
const mongoUri = 'mongodb+srv://realprosl:22568150k@cluster0.wn6ap.mongodb.net/realpro?retryWrites=true&w=majority';


mongo.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e));

module.exports = mongo;