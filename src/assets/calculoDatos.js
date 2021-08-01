const error = ()=>{
    console.error('calculoDatos necesita dos objetos :')
    console.error('1.El objeto de obras')
    console.error('2.Objeto de configuracion')
}

const calculoDatos = (obras,objConfig)=>{

    if(obras != undefined && objConfig != undefined){
        if(typeof obras === 'object' && typeof objConfig === 'object'){
            for(let obra in obras){
            
                obras[obra].ingresos = obras[obra].ingresos[0];
                console.log(obras[obra].ingresos);
                
                let ingresos = (obras[obra].ingresos === undefined)? 
                                                0 : 
                                                obras[obra][objConfig.ingresos.tabla][objConfig.ingresos.campo]
                             
                let materiales = 0;
                obras[obra][objConfig.gastos.materiales.tabla].map(item=>{
                    materiales += item[objConfig.gastos.materiales.campo]
                });
                console.log('materiles______>',materiales);
                let manoObra = parseInt(obras[obra][objConfig.gastos.manoObra.tabla].length)*objConfig.gastos.manoObra.precio;
                let gastos = materiales + manoObra;
                console.log('mano obra____________>',manoObra);
                console.log('ingresos_____________>',ingresos);

                obras[obra]={
                    ingresos:ingresos,
                    gastos:gastos,
                    beneficio:ingresos-gastos
                }

            }
        }else error();
    }else error();
    return obras;
}

module.exports = calculoDatos;