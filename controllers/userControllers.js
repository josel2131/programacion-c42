import { usuario } from '../models/usuario.js';

 //modulo para registrar usuario
export const regusuario = (req, res) => {
  const user = usuario(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error })); 
 };

 /*export const regusuario = async (req, res) => {
  res.send("archivo agregado con exito")
  console.log(req.body)
  await usuario.create({nombreUsuario: req.body.nombreUsuario, password: req.body.password,correo:req.body.correo })
 }*/

 //encontrar todos los usuarios

 export const showuser = (req,res) => {

  usuario
  .find()
  .then((data)=> res.json(data))
  .catch((error)=> res.json({message:error}));

 };


export const showoneuser = (req,res) => {
  const { id } = req.params;

  usuario
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
 };

 export const upuser = (req, res) => {
  const { id } = req.params;
  const{ nombreUsuario , password , correo} = req.body;
  usuario
   .updateOne({ _id: id }, { $set: { nombreUsuario, password, correo } })
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error }));
  

 };

 export const deluser = (req,res) => {
  const { id } = req.params;

  usuario
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
 };
