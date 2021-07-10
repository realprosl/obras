const Router = require('express');
const fs = require('fs');
const pdf = require('html-pdf');
const router = Router();

// post crear pdf
router.post('/pdf/:busqueda',(req,res)=>{
    const {body} = req;
    const {busqueda} = req.params
    let properties;
    if(Object.keys(body[0]))properties = Object.keys(body[0]);
    //console.log(body);
    const header = `        <!DOCTYPE html>
                            <html lang="es">
                            <head>
                                <meta charset="UTF-8">
                                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Document Pdf</title>
                            <style>
                                body{
                                    margin:10px;
                                    width:100%;
                                    height:100%;
                                    font-family: Arial, Helvetica, sans-serif;
                                }
                                h1{
                                    color:black;
                                    margin-top:100px;
                                    margin-left:30px;
                                    margin-right:30px;
                                    margin-bottom:50px;
                                }
                                table{
                                    margin-left:30px;
                                    margin-right:30px;
                                    width:90%;
                                
                                }
                                th{
                                    background-color:royalblue;
                                    color:white;
                                }
                                td{
                                    text-align : center;
                                }
                            </style>
                            </head>`;

    let itemsTitulo=``;
    
        for(let item in properties){
            itemsTitulo = itemsTitulo + `<th class="item">${properties[item]}</th>`
        }

    const htmlTitulo = `<body>
                            <table>
                            <h1>Informe</h1>
                            <tr class="container titulo">
                            ${itemsTitulo}
                            </tr>
                        </body>
                        </html>`;

    let htmlBody = body.map(obra=>{
                            let items=`<tr>`;
                            for(let item in properties){

                                items = items +`<td class="item">${obra[properties[item]]}</td>`

                            }
                            items = items + `</tr>`;
                            return items;
                            });

    htmlBody = htmlBody.toString();
    htmlBody = htmlBody.replace(',','');
    const html = htmlTitulo + htmlBody;
    const page = header + html + '</table>'+ `<h3>Total Items :${body.length}</h3>`
    pdf.create(page).toFile('./src/pdf/'+busqueda+'.pdf',(e)=>{
        if(e){
            console.error(e);
        }else{
            console.log('PDF creado ...');
        }
    })
    res.send('ok');
  

})


module.exports = router;