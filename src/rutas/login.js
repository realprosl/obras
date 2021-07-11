const {Router} = require('express');
const router = Router();

router.post('/login/:tabla',async(req,res)=>{
    // grabo req en variables locales 
    const {body} = req;
    const {tabla} = req.params;

    // imprimo las varibles
    console.log('valor body :',body,'valor tabla :',tabla);

    // valido que no llegua undefined
    if(body != undefined && tabla != undefined){

        // requiero la base de datos y busco un usuario que coincida
        const BD = require(`../mogodb/models/${tabla}`);
        const usuario = await BD.findOne({usuario:body.usuario})

        // imprimo el usuario
        console.log(usuario);
        if(usuario != null){
        // si el usuario y la contraseña coniciden con el de la dase de datos retorn true en la res
                if(usuario.usuario === body.usuario && usuario.contrasena === body.contrasena){
                    res.json({login:true,usuario:usuario.usuario})
                }else{
                
                    // sino un false
                    res.json({login:false})
                }
        }else{

            res.json({login:false})
        }

        
    }else{

        // si todo falla retorno un mesaje al frontend
        res.json({error:'Algo fallo me llega undefined'})
    }
})

module.exports = router;