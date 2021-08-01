const {Router} = require('express');
const router = Router();
const getInformationCollections = require('../assets/getInformationCollections');
const agruparPorObra = require('../assets/agruparPorObra');
const getArrayObras = require('../assets/getArrayObras');
const calculoDatos = require('../assets/calculoDatos');

const collections = ['ingresos','materiales','obras']
const precioOperarios = 100;

// GET
router.get('/getAll', async(req, res) => {

    // obtengo datos de las colecciones
    const bd = await getInformationCollections(collections)
    // las agrupo por las obras existentes
    let obras = {};
    let listObras = getArrayObras(bd['obras']);
        listObras.forEach(item=>{

            obras[item] = agruparPorObra(item , bd);

    })
    // calculo datos para la grafica 
    const objConfig = {

       ingresos:{
           tabla:'ingresos',
           campo:'presupuesto'
       },
       gastos:{
           manoObra:{
               tabla:'obras',
               precio:precioOperarios,
           },
           materiales:{
               tabla:'materiales',
               campo:'dinero'
           }
       }
    }
    obras = calculoDatos(obras,objConfig)
    await res.json(obras) ; 

 
    

    

});

module.exports = router;

