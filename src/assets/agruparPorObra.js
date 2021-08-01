
const agruparPorObra = (obraName , bd)=>{ 
    let obra = {}

    // agrupo por obra
       if(obraName != undefined){    
                for(let collection in bd){

                    obra[collection] = bd[collection].map(item=>{

                                                        for(let property in item){

                                                            if((property === 'obra' || property === 'obras') 
                                                                && item[property] === obraName){

                                                                return item;
                                                            }
                                                        }
                    })
                }
    }
    // limpio nulos y indefinidos
   for(let item in obra){
       obra[item]=obra[item].filter(n=>n);
   }
    // retorn resultado
    return obra;
}

module.exports = agruparPorObra;