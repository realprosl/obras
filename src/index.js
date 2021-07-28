// importaciones de modulos
const serv = require('./app');


// constante puerto se
const port = process.env.PORT || 5000;


// Requiero todas las rutas delservidor
serv.use(require('./rutas/get'));
serv.use(require('./rutas/post'));
serv.use(require('./rutas/put'));
serv.use(require('./rutas/delete'));
serv.use(require('./rutas/post-pdf'));
serv.use(require('./rutas/get-pdf'));
serv.use(require('./rutas/login'));

// conexion a base de datos
const mongo = require('mongoose');
const mongoUri = 'mongodb+srv://realprosl:22568150k@cluster0.wn6ap.mongodb.net/realpro?retryWrites=true&w=majority';

mongo.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e));

  



// Servidor escuchando
serv.listen(port, () => console.log('Servidor en puerto', port));