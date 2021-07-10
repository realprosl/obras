const {Router} = require('express');
const router = Router();

// post
router.post('/post/:tabla', async(req, res) => {
    const {body,params} = req;
    const {tabla} = params;
    
    delete body._id;
   
    console.log(body);
    console.log(tabla);

    // leo base de datos 
    const BD = require(`../mogodb/models/${tabla}`);

    // creo un nuevo registro 
    BD.create(body,async(err)=>{
        if(err){console.log(err)}
        try{
            const bd = await BD.find();
            res.json(bd);
        }catch(err){res.json({error:err})}
    });



});

module.exports = router;