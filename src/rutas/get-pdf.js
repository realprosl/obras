const {Router} = require('express');
const router = Router();

// get descargar pdf
router.get('/descargar/:busqueda',(req,res)=>{
    const {busqueda} = req.params;
    res.type('pdf');
    setTimeout(()=>{
        res.download('./src/pdf/'+busqueda+'.pdf',busqueda+'.pdf');
    },2000)
})


module.exports = router;

