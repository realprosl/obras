 
const getArrayObras = (obra)=>{

    // obtengo las obras
   let array = [];
   obra.forEach(item=>{
       for(let property in item){

        if(property === 'obra' || property === 'obras'){
            array.push(item[property]);
        }
       }
   })
   // borro espacios
   //array = (array.toString().replace(/ /g, '')).split(',');
   // limpio obras repatidas 
   array= array.filter(item=>{
       return array.hasOwnProperty(item)? false : array[item]= true;
   })
    return array;
}

module.exports = getArrayObras;