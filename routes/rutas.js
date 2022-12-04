import express  from "express";
import {URI} from '../conectarMongodb.js';
import { regusuario, showuser, showoneuser, upuser, deluser, } from '../controllers/userControllers.js';
import { delevento, regevento, showeonevento, showevento, upevento } from '../controllers/ceventoController.js';
//import cors from 'cors';
export const router = express.Router();





router.get('/', (req,res) => {
    res.send('bienvenidos a node js desde la raiz');
    console.log("connected to", db.connection.name);

})

router.get('/login',(req,res)=>{
    res.send('Bienvenidos carevergas');

})

//rutas para usuarios
router.post('/reguser',regusuario ); 
router.get('/shuser', showuser );
router.get('/shuser/:id', showoneuser);
router.put('/upuser/:id',upuser);
router.delete('/deluser/:id' ,deluser);

//rutas para eventos
router.post('/regevento',regevento );
router.get('/showevento', showevento );
router.get('/showevento/:id', showeonevento);
router.put('/upevento/:id',upevento);
router.delete('/delevento/:id' ,delevento);


router.delete('/delete',(req,res)=>{
    res.send('archivo eliminado con exito');
})

export default router;