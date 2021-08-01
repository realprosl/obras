

const getInformationCollections = async(collections)=>{
    const bd = {};
    
    for(let item of collections){

        const BD = require(`../mogodb/models/${item}`);
        bd[item] = await BD.find();
      
    }
    return await bd;
}

module.exports = getInformationCollections;