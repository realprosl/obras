const {Router} = require('express');
const router = Router();


// put
router.put('/put/:tabla',async(req , res)=>{
    const {body} = req;
    const {tabla} = req.params;
    console.log(body._id);
    console.log(tabla);
    const query = {_id:body._id}
    delete body._id;
    BD = require(`../mogodb/models/${tabla}`);
    BD.updateOne(query,body,async(err)=>{
        if(err){console.log(err)}
        try{
            const bd = await BD.find();
            res.json(bd);

        }catch{
            res.json({error:err});
            console.error('Fallo al actualizar')
        }
    })
    })
    

module.exports = router;
