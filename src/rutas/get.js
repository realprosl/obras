const {Router} = require('express');
const router = Router();


// GET
router.get('/get/:tabla', async(req, res) => {

    const {tabla} = req.params;
    
    console.log(`Base de datos:${tabla}`);
    const BD = require(`../mogodb/models/${tabla}`);
    const bd = await BD.find();
    console.log(bd);
    console.log(BD)
    res.json(bd);

});

module.exports = router;