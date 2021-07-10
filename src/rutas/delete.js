const {Router} = require('express');
const router = Router();

// delete
router.delete('/delete/:id/:tabla',async(req,res)=>{
    let {id,tabla} = req.params;
    console.log('Id reciboda:',id)
    console.log('tabla recivida :',tabla);
    BD = require(`../mogodb/models/${tabla}`);

    BD.findById(id).remove(async(err)=>{
        if(err){console.error(err)}

        try{
            const bd = await BD.find();
            console.log('borrado de rejistro con exitoS')
            res.json(bd);
        }catch{
            console.error('Error al borrar registro');
            res.json({error:'Error al borrar registro'})
        }
    });
})



module.exports = router;
